var mongoose=require('mongoose'); //import mongoos madam bech ne5dmo cloud bech yafhm li howa al cloud bech ysob kol chy

var alert = new mongoose.Schema({
	_id:Number,
    Alert_Name:String,
	Keywords:String,
	Location:String,
    Date_Created:String,
	Frequency:String,
	Statu:String,

	
});


//ligne hadha dima mawjoud bad mathadher l class lazem tamelo export bach les fichier lo5rin ynajmo yamlo access
module.exports = mongoose.model(
	'alert', alert, 'Alerts');

    