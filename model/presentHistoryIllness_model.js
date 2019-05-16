var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PresentHistorySchema = new Schema({
    patient_id:String,
    history:{type:Schema.Types.String}
});

module.exports = mongoose.model('PresentHistory', PresentHistorySchema);