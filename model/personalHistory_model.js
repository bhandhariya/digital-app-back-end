var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonalHistorySchema = new Schema({
    patient_id:String,
    BirthHistory:{type:Schema.Types.String},
    ImmunizationHistory:{type:Schema.Types.String},
    DevelopmentHistory:{type:Schema.Types.String},
    EducationHistory:{type:Schema.Types.String},
    OccupationHistory:{type:Schema.Types.String},
    MarritalandSexualHistory:{type:Schema.Types.String},
    MenstrualandobstetricHistory:{type:Schema.Types.String},
    createdBy:{type:Schema.Types.String},
    creationDate:{type:Schema.Types.Date},
    
});

module.exports = mongoose.model('PersonalHistory', PersonalHistorySchema);