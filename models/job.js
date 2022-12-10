var mongoose=require('mongoose'); //import mongoos madam bech ne5dmo cloud bech yafhm li howa al cloud bech ysob kol chy

var jobSchema = new mongoose.Schema({
	
	Email:String,
    Title:String,
    Location:String,
    Type:String,
   // Category:String,
    Tags:String,
    Description:String,
    Closing_Date:String,
    Company_Name:String,
    Website:String,
    Twitter_Username:String,
    userId:String
	
});




//ligne hadha dima mawjoud bad mathadher l class lazem tamelo export bach les fichier lo5rin ynajmo yamlo access
module.exports = mongoose.model(
	'job', jobSchema, 'jobs');
