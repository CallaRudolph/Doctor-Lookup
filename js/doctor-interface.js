var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append("<li>" + doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + "</li>");
  });
};

$(document).ready(function() {
  $('.response').hide();
  $('#doctors').hide();
  var currentDoctorObject = new Doctor();
  $('#input').click(function() {
    var symptom = $('#symptom').val();
    $('#doctors').empty();
    $('.response').show();
    $('#doctors').show();
    $('.symptom').text(symptom);
    currentDoctorObject.getDoctors(symptom, displayDoctors);
  });
});
