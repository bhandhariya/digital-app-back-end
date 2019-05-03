var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComplaintSchema = new Schema({
   
    patient_id:String,
    complain:String,
    complain_duration:{type:Schema.Types.String}





});

module.exports = mongoose.model('Complain', ComplaintSchema);