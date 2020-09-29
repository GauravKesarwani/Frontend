const express = require('express');
const app = express();
const download = require('image-downloader');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

function imageHandler(req, res) {
  console.log('req params', req.body);
  const url = req.body.url;

  const options = {
    url,
    dest: '../../images',
  };

  download.image(options)
    .then(({ filename, image }) => {
      console.log('File saved to', filename)
    })
    .catch((err) => {
      console.error(err)
    })
}

function renderPage(req, res) {
  res.sendFile(path.join(__dirname, 'ImageUpload.html'));
}


app.post('/imageUpload', imageHandler);
app.get('/', renderPage)


app.listen(3000, () => console.log('Example app listening on port 3000!'));
