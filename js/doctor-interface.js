var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(doctors) {
  doctors.forEach(function(doctor) {
    $('#doctors').append("<li>" + doctor.profile.first_name + " " + doctor.profile.last_name + ", " + doctor.profile.title + "</li>");
  });
};

$(document).ready(function() {
  $('#doctors').hide();
  var currentDoctorObject = new Doctor();
  $('#input').click(function() {
    $('#doctors').empty();
    $('#doctors').show();
    var symptom = $('#symptom').val();
    currentDoctorObject.getDoctors(symptom, displayDoctors);
  });
});
