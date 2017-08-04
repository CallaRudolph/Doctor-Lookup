var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $('#doctors').append("Sorry, your symptom is incurable by a doctor with that name. Maybe try another symptom or doc.<br><br><br>");
  } else {
    doctors.forEach(function(doctor) {
      $('#doctors').append("<li>" + "<img src='" + doctor.profile.image_url + "'> " + doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + "</li><br>");
    });
  }
};

var displaySpecialities = function(specialities) {
  specialities.forEach(function(specialty) {
    $('#specialtyResponse').append("<li>" + specialty.name + "</li>");
  });
};

$(document).ready(function() {
  $('.response').hide();
  $('#doctors').hide();
  var currentDoctorObject = new Doctor();

  $('#input').click(function() {
    var symptom = $('#symptom').val();
    var name = $('#name').val();
    $('#symptom').val("");
    $('#name').val("");
    $('#doctors').empty();
    $('.response').show();
    $('#doctors').show();
    $('.symptom').text(symptom);
    $('.name').text(name);
    currentDoctorObject.getDoctors(symptom, name, displayDoctors);
  });

  $('#input2').click(function() {
    currentDoctorObject.getSpecialities(displaySpecialities);
  });
});
