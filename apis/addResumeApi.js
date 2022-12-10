var mongoose = require('mongoose'); // kil3ada lazem mongoos (cloud)
var express = require('express');
var router = express.Router(); //express router hna kima fil angular fazet app routing mta3 gestion path w hak l 3afsus
var addResumeModel = require('./../models/addResume'); // hna bech tnadi l model li bech ta3ml alaha l crud (user)

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
// router.post('/addResume/save', function(req, res) {

//     //tasna3 instance mil model mta3ik kima haka
//     var newaddResume = new addResumeModel(); //ism l model li importetaha l fog
//     newaddResume._id = req.body._id;
//     newaddResume.Name = req.body.Name; // kol attribute mil model thotila req.body.attribue li fil model bech ay haja tjih ysobha fil attribute hakka
//     newaddResume.Email = req.body.Email;
//     newaddResume.Title = req.body.Title;
//     newaddResume.Location = req.body.Location;
//     newaddResume.ResumeContent = req.body.ResumeContent;
//     newaddResume.Education = req.body.Education
//     newaddResume.Experience = req.body.Experience;
//     newaddResume.Photo = req.body.Photo;
//     newaddResume.Video = req.body.Video;
//     newaddResume.Url = req.body.Url;
       
//     newaddResume.save(function(err, data){ // ba3d taml .save hedhi predeifni tsoblik fil base tab3adh les information
//            if(err){
//                console.log(error);
//            }
//            else{
//                res.send("Data inserted");
//            }
//        });
//     });


router.route('/Resume/save').post((req, res, next) => {

  addResumeModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
});


//delete

router.get('/Resume/delete', function(req, res) {
  addResumeModel.remove({manageRId:188}, 
  function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
});
//deletebyid
router.delete('/Resume/delete/:id', function(req, res) {
  addResumeModel.findByIdAndDelete((req.params.id), 
  function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
          console.log("Data Deleted!");
      }
  });  
});


    //afficher tous les users bech ntesto bhedhi ok sahel l code esm l model . find automatique yjiblik mil base 
     router.get('/Resume/findall', function(req, res) {
        addResumeModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     router.route('/addResume/:_id').get((req, res,next) => {
      addResumeModel.findById(req.params._id, (error, data) => {
          if (error) {
            return next(error)
          } else {
            res.json(data)
          }
        })
      })

      router.delete('/addResume/:_id', (req, res, next) => {
        addResumeModel.deleteOne({_id: req.params._id}).then(
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



      router.put('/addResume/:id', (req, res, next) => {
        var addResume = new addResumeModel();
        addResume._id = req.body._id;
        addResume.Name = req.body.Name; 
        addResume.Email = req.body.Email;
        addResume.Title = req.body.Title;
        addResume.Location = req.body.Location;
        addResume.ResumeContent = req.body.ResumeContent;
        addResume.Education = req.body.Education
        addResume.Experience = req.body.Experience;
        addResume.Photo = req.body.Photo;
        addResume.Video = req.body.Video;
        addResume.Url = req.body.Url;
        
        addResumeModel.updateOne({_id: req.params.id}, addResume).then(
          () => {
            res.status(201).json({
              message: 'Thing updated successfully!'
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


    //ligne hedhi important kima lada lazem texporti bech ynajmo les fichier lo5rin yamlo accer 
    //hna texporter les routes li sna3tihom bech ki tektbi path fil navigateur ynajm yjiblik donner
   module.exports = router;