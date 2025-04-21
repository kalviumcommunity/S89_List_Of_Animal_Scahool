const mongoose = require('mongoose');







const AnimalSchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  animals: {
    type: [String],
    validate: {
      validator: function (value) {
        return Array.isArray(value) && new Set(value).size === value.length;
      },
      message: 'Animals must be unique.'
    }
  }
}, { timestamps: true });


const AnimalSchool = mongoose.model('AnimalSchool', AnimalSchoolSchema);

module.exports = AnimalSchool;
