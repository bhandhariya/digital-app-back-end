var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PossessionSchema = new Schema({
    patient_id:String,
    Obsession:{type:Schema.Types.String},
    Complusion:{type:Schema.Types.String},
    ObsessiveCompulsive:{type:Schema.Types.String},
    ThoughtAlienationPhenomenon:{type:Schema.Types.String},
    ThoughtAlienationPhenomenonExample:{type:Schema.Types.String}
    
});

module.exports = mongoose.model('Possession', PossessionSchema);