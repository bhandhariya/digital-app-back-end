var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LegalHistorySchema = new Schema({
    patient_id:String,
    HomicideAttempt:{type:Schema.Types.String},
    preMorbidpersonality:{type:Schema.Types.String}
    
});

module.exports = mongoose.model('LegalHistory', LegalHistorySchema);