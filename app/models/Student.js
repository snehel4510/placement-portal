const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    age: { type: Number, required: true, min: 17, max: 25 },
    year: { type: Number, required: true, min: 1, max: 4 },
    email: {
        type: String, required: true, validate: {
            validator: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            message: 'Please provide a valid email address.'
        }
    },
    gender: { type: String, required: true },
    branch: { type: String, required: true },
    enroll: { type: Number, required: true },
    cgpa: { type: mongoose.Schema.Types.Decimal128, required: true, min: 0, max: 10 },
    matric: { type: mongoose.Schema.Types.Decimal128, required: true, min: 40, max: 100 },
    inter: { type: mongoose.Schema.Types.Decimal128, required: true, min: 40, max: 100 },
    backlogs: { type: Number, required: true, min: 0, max: 10 },
    tier: { type: Number, required: true, min: 0, max: 3 }
});


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
