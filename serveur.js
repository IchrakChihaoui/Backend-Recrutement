const express = require('express') //installo express  
const bodyParser=require('body-parser');
const app = express() //importha bech te5dmo baha bad lota
const api = require('./apis/userApi') 
const jobApi = require('./apis/jobApi') 
const addResume = require('./apis/addResumeApi') 
const categorie = require('./apis/categorieApi')
const alert = require('./apis/alertApi')
const managej = require('./apis/managejApi')
const manageapp = require('./apis/manageappApi') 
const manageR = require('./apis/manageRApi')
const browseResume = require('./apis/browseResumeApi')
const aply = require('./apis/aplyapi')
const cors=require('cors')






 
// hna lazem nado fichier api li hiye bech ykoun fiha les crud kol mta3 les table 
 // Middleware
 app.use(express.json())
 app.use(cors({
   origin:'*'
  }))

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.urlencoded({
    extended: true
}));




//connection serveur 
app.listen(3000, () => {
    console.log('Serveur à l"écoute')
  })

//hna n9oulo lil serveur n9ololo rak bech tista3ml fichier api li imprtetha lfoug wadha7 
  app.use('/api', api);
  app.use('/api', jobApi);
  app.use('/api', addResume);
  app.use('/api', categorie);
  app.use('/api', alert);
  app.use('/api', managej);
  app.use('/api', manageapp);
  app.use('/api', manageR);
  app.use('/api', browseResume);
  app.use('/api', aply);
 
 

 

 

  

 
