const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const replicaApp =  process.env.APP_NAME;

app.use('/images', express.static(path.join(__dirname, 'images'))); // Serve static files from the 'images' directory

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve the index.html file
  console.log(`request served by ${replicaApp}`);
});

app.listen(port, () => {
  console.log(`Node ${replicaApp} is listening on port ${port}`)
})
