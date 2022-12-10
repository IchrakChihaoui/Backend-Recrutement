var mongoose = require('mongoose'); // kil3ada lazem mongoos (cloud)
var express = require('express');
var router = express.Router(); //express router hna kima fil angular fazet app routing mta3 gestion path w hak l 3afsus
var manageappModel = require('./../models/manageapp'); // hna bech tnadi l model li bech ta3ml alaha l crud (user)

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
router.post('/manageapp/save', function(req, res) {

    //tasna3 instance mil model mta3ik kima haka
    var newmanageapp = new manageappModel(); //ism l model li importetaha l fog
       newmanageapp._id = req.body._id; // kol attribute mil model thotila req.body.attribue li fil model bech ay haja tjih ysobha fil attribute hakka
       newmanageapp.Name = req.body.Name;
       newmanageapp.Statu = req.body.Statu;
       newmanageapp.Email = req.body.Email;
       newmanageapp.Message = req.body.Message;
       newmanageapp.Note = req.body.Note;
      



       
       newmanageapp.save(function(err, data){ // ba3d taml .save hedhi predeifni tsoblik fil base tab3adh les information
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });


    //afficher tous les users bech ntesto bhedhi ok sahel l code esm l model . find automatique yjiblik mil base 
     router.get('/manageapp/findall', function(req, res) {
        manageappModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     router.route('/manageapp/:_id').get((req, res,next) => {
        manageappModel.findById(req.params._id, (error, data) => {
          if (error) {
            return next(error)
          } else {
            res.json(data)
          }
        })
      })






      router.delete('/manageapp/:_id', (req, res, next) => {
        manageappModel.deleteOne({_id: req.params._id}).then(
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



      router.put('/manageapp/:id', (req, res, next) => {
        var manageapp = new manageappModel(); 
        manageapp._id = req.body._id;
        manageapp.Name = req.body.Name;
        manageapp.Statu = req.body.Statu;
        manageapp.Email = req.body.Email;
        manageapp.Message = req.body.Message;
        manageapp.Note = req.body.Note;
        
        manageappModel.updateOne({_id: req.params.id}, manageapp).then(
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