var apiKey = require('./../.env').apiKey;

Doctor = function() {

};

Doctor.prototype.getDoctors = function(symptom, name, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&query=' + symptom + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      displayDoctors(result.data);
    })
    .fail(function(error) {
      console.log("fail");
    });
};

Doctor.prototype.getSpecialities = function(displaySpecialities) {
  $.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=' + apiKey)
    .then(function(result) {
      displaySpecialities(result.data);
    })
    .fail(function(error) {
      console.log("no specialties");
    });
};

exports.doctorModule = Doctor;
