var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $('#doctors').append("Sorry, your symptom is incurable.");
  } else {
    doctors.forEach(function(doctor) {
      $('#doctors').append("<li>" + "<img src='" + doctor.profile.image_url + "'> " + doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + "</li><br>");
    });
  }
};

$(document).ready(function() {
  $('.response').hide();
  $('#doctors').hide();
  var currentDoctorObject = new Doctor();
  $('#input').click(function() {
    var symptom = $('#symptom').val();
    $('#symptom').val("");
    $('#doctors').empty();
    $('.response').show();
    $('#doctors').show();
    $('.symptom').text(symptom);
    currentDoctorObject.getDoctors(symptom, displayDoctors);
  });
});
