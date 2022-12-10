var mongoose = require('mongoose'); // kil3ada lazem mongoos (cloud)
var express = require('express');
var router = express.Router(); //express router hna kima fil angular fazet app routing mta3 gestion path w hak l 3afsus
var jobModel = require('./../models/job'); // hna bech tnadi l model li bech ta3ml alaha l crud (user)

// Connecting to database ( hadha hna len li bta3mlila copier li s2alti alih mbekri ichrak ) yamel connextion al base w node 
var query = 'mongodb+srv://recrutement:Ichrak123*@cluster0.ft5de.mongodb.net/dbrec?retryWrites=true&w=majority'

const db = (query); //3adiya hatina l lien fi variable db 
mongoose.Promise = global.Promise; 

//lahna golnala connecter al base mta3na w 3tinah lien d'access haka fih password w username ta3 l base
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
	if (error) {
		console.log("Error!" + error);
	}
    
   
});

// c bon tawa bach tabda taml l crud mithel nhabo namlo ajo fil base 
//kima fil spring boot bil pos wil get w put ...

//taml l path  /save li bech tektibih fil navigateur
//router.post('/job/save', function(req, res) {

    //tasna3 instance mil model mta3ik kima haka
    //var newJob = new jobModel(); //ism l model li importetaha l fog
        // kol attribute mil model thotila req.body.attribue li fil model bech ay haja tjih ysobha fil attribute hakka
      //  newJob.Email = req.body.Email;
      //  newJob.Title = req.body.Title;
      //  newJob.Location = req.body.Location;
      //  newJob.Type = req.body.Type;
      //  newJob.Category = req.body.Category
      //  newJob.Tags = req.body.Tag;
      //  newJob.Description = req.body.Description;
      //  newJob.Closing_Date = req.body.Closing_Date;
      //  newJob.Campany_Name=req.body.Campany_Name;
      //  newJob.Website=req.body.Website;
      //  newJob.Twitter_Username=req.body.Twitter_Username;
      //  newJob.userId=req.body.userId;

  
      


    
       
    //    newJob.save(function(err, data){ // ba3d taml .save hedhi predeifni tsoblik fil base tab3adh les information
    //        if(err){
    //            console.log(error);
    //        }
    //        else{
    //            res.send("Data inserted");
    //        }
    //    });
    // });

    // Add User
router.route('/job/save').post((req, res, next) => {

  jobModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});


    //afficher tous les users bech ntesto bhedhi ok sahel l code esm l model . find automatique yjiblik mil base 
     router.get('/job/findall', function(req, res) {
        jobModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     router.route('/job/:_id').get((req, res,next) => {
        jobModel.findById(req.params._id, (error, data) => {
          if (error) {
            return next(error)
          } else {
            res.json(data)
          }
        })
      })

      router.delete('/job/delete/:_id', (req, res, next) => {
    jobModel.deleteOne({_id: req.params._id}).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
      });
    

   // router.get('/delete', function(req, res) {
     //   UserModel.remove({UserId:188}, 
       // function(err, data) {
         //   if(err){
           //     console.log(err);
            //}
            //else{
              //  res.send(data);
            //}
        //});  
    //});


    //router.post('/delete', function(req, res) {
      //  UserModel.findByIdAndDelete((req.body.id), 
        //function(err, data) {
          //  if(err){
            //    console.log(err);
            //}
            //else{
              //  res.send(data);
                //console.log("Data Deleted!");
            //}
     //   });  
    //});


    //router.post('/update', function(req, res) {
      //  UserModel.findByIdAndUpdate(req.body.id, 
        //{Name:req.body.Name}, function(err, data) {
          //  if(err){
                //console.log(err);
            //}
            //else{
              //  res.send(data);
                //console.log("Data updated!");
            //}
       // });  
    //});  


    //ligne hedhi important kima lada lazem texporti bech ynajmo les fichier lo5rin yamlo accer 
    //hna texporter les routes li sna3tihom bech ki tektbi path fil navigateur ynajm yjiblik donner
   module.exports = router;