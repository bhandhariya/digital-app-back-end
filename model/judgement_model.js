var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var JudgementSchema = new Schema({
    patient_id:String,
    JudgementPerosnal:{type:Schema.Types.String},
    JudgementSocial:{type:Schema.Types.String},
    JudgementTest:{type:Schema.Types.String}
    
});

module.exports = mongoose.model('Judgement', JudgementSchema);