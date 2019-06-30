var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HisrotyOfModeOfIntakeSchema = new Schema({
    patient_id:String,
    PsychatricHistory:{type:Schema.Types.String},
    MedicalHistory:{type:Schema.Types.String},
    createdBy:{type:Schema.Types.String},
    creationDate:{type:Schema.Types.Date},
});

module.exports = mongoose.model('PastHiHisrotyOfModeOfIntakestory', HisrotyOfModeOfIntakeSchema);