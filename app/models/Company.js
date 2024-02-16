const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    company: { type: String, required: true },
    About: { type: String, required: true },
    website: {
        type: String,
        required: true,
        validate: {
            validator: (website) => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm.test(website),
            message: 'Please provide a valid website URL.'
        }
    },
    email: {
        type: String, required: true, validate: {
            validator: (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            message: 'Please provide a valid email address.'
        }
    },
    contact: {
        type: String,
        required: true,
        validate: {
            validator: (phone) => /^\d{10}$/.test(phone),
            message: 'Please provide a valid 10-digit phone number.'
        }
    },
    role: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: mongoose.Schema.Types.Decimal128, required: true, min: 3, max: 30 },
    intern: { type: Number, required: true, min: 0 },
    stipend: { type: Number, required: true, min: 10 },
    criteria: {
        cgpa: { type: Number, required: true, min: 5, max: 8 },
        matric: { type: Number, required: true, min: 50, max: 80 },
        inter: { type: Number, required: true, min: 50, max: 80 },
        backlogs: { type: Number, required: true, min: 0, max: 3 }
    }
});


const Company = mongoose.model('Company', companySchema);

module.exports = Company;
