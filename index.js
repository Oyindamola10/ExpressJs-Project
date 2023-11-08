 const express = require('express')
 const app = express();
 const port = 8087

 app.get('/', (request, response) => {
    response.send("Adegbenro Samiat")
 });

 app.get('/about', (request, response) => {
    response.send("I'm a full-stack developer ")
 });

 app.listen(port, () => {
    console.log(`server running on ${port}`)
 })