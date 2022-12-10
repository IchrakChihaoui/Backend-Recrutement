
var mongoose=require('mongoose'); //import mongoos madam bech ne5dmo cloud bech yafhm li howa al cloud bech ysob kol chy

var AplySchema = new mongoose.Schema({
	userid: String,
    idemployer: String,
    jobid:String,
    accepted:String
	
});

//ligne hadha dima mawjoud bad mathadher l class lazem tamelo export bach les fichier lo5rin ynajmo yamlo access
module.exports = mongoose.model(
	'aply', AplySchema, 'Aplys');
