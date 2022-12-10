var mongoose=require('mongoose'); //import mongoos madam bech ne5dmo cloud bech yafhm li howa al cloud bech ysob kol chy

var AddResume = new mongoose.Schema({
	CandidatId:String,
    Name:String,
	Email:String,
    Title:String,
    Location:String,
    ResumeContent:String,
    Education:String,
    Experience:String,
    //Photo:String,
    //video:String,
    Url:String,
    

	
});


//ligne hadha dima mawjoud bad mathadher l class lazem tamelo export bach les fichier lo5rin ynajmo yamlo access
module.exports = mongoose.model(
	'AddResume', AddResume, 'AddResumes');

    