const express= require('express');
const panier= require('../controllers/Panier.controller');
const fs = require('fs');
const path = require('path');
var easyinvoice = require('easyinvoice');
const route = express.Router();
route.get("/panier",panier.listPanier);
route.get("/panierProduct",panier.listPanierProduct)
route.post("/addPanier",panier.Add);
route.post("/updatePanier/:id",panier.updatePanier);
route.get("/removePanier/:id",panier.deletePanier);
route.get("/removeAllPanier",panier.removeAllPanier)

route.get("/createPdf/:produitName",panier.Createpdf);



function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

route.get('/image/:name', async (req, res) => {
const bitmap = base64_encode(path.join(__dirname, `/../path/logo.png`));

res.sendFile(path.join(__dirname, `/../path/${req.params.name}`)); 
});
module.exports=route;