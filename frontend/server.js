import express from 'express';
import data from './data.js';

const app = express();

app.use("/api/products/:id" , (req, res, next) => {
   
    res.send(data.products);
    
    
 });
 

 app.listen(5001, () => {console.log("Server started at http://localhost:5001") })