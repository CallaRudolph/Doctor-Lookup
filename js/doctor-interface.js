var Doctor = require('./../js/doctor.js').doctorModule;

var displaySpecialities = function(specialities) {
  specialities.forEach(function(specialty) {
    $('#specialtyResponse').append("<option value ='" + specialty.name + "'>" + specialty.name + "</option>");
  });
};

var displayDoctors = function(doctors) {
  if (doctors.length === 0) {
    $('#doctors').append("Sorry, your symptom is incurable by a doctor with that name. Maybe try another symptom or doc.<br><br><br>");
  } else {
    doctors.forEach(function(doctor) {
      $('#doctors').append("<li>" + "<img src='" + doctor.profile.image_url + "'> " + doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + "</li><br>");
    });
  }
};

$(document).ready(function() {
  var currentDoctorObject = new Doctor();

  $('#specialty').click(function() {
    $('#specialtyResponse').show();
    currentDoctorObject.getSpecialities(displaySpecialities);
  });

  $('#search').click(function() {
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
});
