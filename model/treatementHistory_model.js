var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TreateMentHistorySchema = new Schema({
    patient_id:String,
    presentHistory:{type:Schema.Types.String},
    pastHistory:{type:Schema.Types.String}
});

module.exports = mongoose.model('TreatementHistory', TreateMentHistorySchema);