var mongoose = require('mongoose'); // kil3ada lazem mongoos (cloud)
var express = require('express');
var router = express.Router(); //express router hna kima fil angular fazet app routing mta3 gestion path w hak l 3afsus
var alertModel = require('./../models/alert'); // hna bech tnadi l model li bech ta3ml alaha l crud (user)

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
router.post('/alert/save', function(req, res) {

    //tasna3 instance mil model mta3ik kima haka
    var newalert = new alertModel(); //ism l model li importetaha l fog
    newalert._id = req.body._id;
    newalert.Alert_Name = req.body.Alert_Name; // kol attribute mil model thotila req.body.attribue li fil model bech ay haja tjih ysobha fil attribute hakka
    newalert.Keywords = req.body.Keywords;
    newalert.Location = req.body.Location; 
    newalert.Date_Created = req.body.Date_Created; 
    newalert.Frequency = req.body.Frequency;
    newalert.Statu = req.body.Statu;

       
    newalert.save(function(err, data){ // ba3d taml .save hedhi predeifni tsoblik fil base tab3adh les information
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });


    //afficher tous les users bech ntesto bhedhi ok sahel l code esm l model . find automatique yjiblik mil base 
     router.get('/alert/findall', function(req, res) {
        alertModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });

     


     router.route('/alert/:_id').get((req, res,next) => {
        alertModel.findById(req.params._id, (error, data) => {
          if (error) {
            return next(error)
          } else {
            res.json(data)
          }
        })
      })






      router.delete('/alert/:_id', (req, res, next) => {
        alertModel.deleteOne({_id: req.params._id}).then(
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



      router.put('/alert/:id', (req, res, next) => {
        var alert = new alertModel(); 
        alert._id = req.body._id;
        alert.Alert_Name = req.body.Alert_Name; 
        alert.Keywords = req.body.Keywords;
        alert.Location = req.body.Location; 
        alert.Date_Created = req.body.Date_Created; 
        alert.Frequency = req.body.Frequency;
        alert.Statu = req.body.Statu;
        
        alertModel.updateOne({_id: req.params.id}, alert).then(
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