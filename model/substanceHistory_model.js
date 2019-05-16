var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubstanceHistorySchema = new Schema({
    patient_id:String,
    HistoryOfChoiseOfSubstance:{type:Schema.Types.String},
    HistoryOfTotalDurationOfUse:{type:Schema.Types.String},
    DevelopmentHistory:{type:Schema.Types.String},
    HistoryOfDurationOfRegularUse:{type:Schema.Types.String},
    HistoryOfDailyIntake:{type:Schema.Types.String},
    HistoryOfLastIntakeOfDrug:{type:Schema.Types.String}
    
});

module.exports = mongoose.model('SubstanceHistory', SubstanceHistorySchema);