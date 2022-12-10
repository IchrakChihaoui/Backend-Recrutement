var mongoose = require('mongoose'); // kil3ada lazem mongoos (cloud)
var express = require('express');
var router = express.Router(); //express router hna kima fil angular fazet app routing mta3 gestion path w hak l 3afsus
var aplyModel = require('./../models/aply'); // hna bech tnadi l model li bech ta3ml alaha l crud (user)

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


    // Add User
router.route('/aply/save').post((req, res, next) => {

  aplyModel.create(req.body, (error, data) => {
    console.log("data",req.body)

    if (error) {
      return next(error);
    } else {
      console.log("data",data)
      res.json(data);
    }
  })
});

router.get('/aply/findall', function(req, res) {
  aplyModel.find(function(err, data) {
      if(err){
          console.log(err);
      }
      else{
          res.send(data);
      }
  });  
});

router.delete('/aply/delete/:_id', (req, res, next) => {
  aplyModel.deleteOne({_id: req.params._id}).then(
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
//update

router.put('/aply/update/:id', function(req, res) {
  console.log(req.body)
  aplyModel.findByIdAndUpdate(req.params.id,{
    $set: req.body
    
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
    
  }, 
 );  
});


   
   module.exports = router;