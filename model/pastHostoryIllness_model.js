var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PastHistorySchema = new Schema({
    patient_id:String,
    history:{type:Schema.Types.String}
});

module.exports = mongoose.model('PastHistory', PastHistorySchema);