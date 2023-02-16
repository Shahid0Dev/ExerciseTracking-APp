const mongoose = require('mongoose');

const exercise=mongoose.Schema(
    {
        name:{type:String},
        description:{type:String},
        activity:{type:String},
        duration:{type:Number},
        date:{type:String},
        email:{type:String},
        password:{type:String},
    }
)

module.exports =mongoose.model('Eerciseto',exercise);