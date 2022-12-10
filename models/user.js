var mongoose=require('mongoose'); //import mongoos madam bech ne5dmo cloud bech yafhm li howa al cloud bech ysob kol chy

var UserSchema = new mongoose.Schema({
	
	mail:String,
	password:String
	
});

//ligne hadha dima mawjoud bad mathadher l class lazem tamelo export bach les fichier lo5rin ynajmo yamlo access
module.exports = mongoose.model(
	'user', UserSchema, 'Users');

    