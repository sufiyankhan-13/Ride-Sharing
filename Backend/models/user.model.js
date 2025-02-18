const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: true,
            trim: true,
            minlength: 3
        },
        email: { 
            type: String, 
            required: true, 
            unique: true
        },
        password: { 
            type: String, 
            required: true,
            minlength: [6, 'Password must be at least 6 characters'],
        },
        role: { 
            type: String, 
            required: true,
            enum: ['driver', 'passenger']  
        },
        phone: { 
            type: Number,
            required: true,
            unique: true,
            maxlength: 11
        },
},
{ timestamps: true}
);

module.exports = mongoose.model('User', userSchema);