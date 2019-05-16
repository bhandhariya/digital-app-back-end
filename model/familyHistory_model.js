var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FamillyHistorySchema = new Schema({
    patient_id:String,
    mentalHistory:{type:Schema.Types.String},
    environHistory:{type:Schema.Types.String},
    attitudeHistory:{type:Schema.Types.String},
    livingHistory:{type:Schema.Types.String},
    
});

module.exports = mongoose.model('FamilyHistory', FamillyHistorySchema);