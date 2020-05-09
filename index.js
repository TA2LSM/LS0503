const fs = require('fs');
//const http = require("http");
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
  console.log(`Breed: ${data}`);

  // superagent get işlevi aslında promise döner.
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        console.log('Random dog image path saved to file!');
      });
    })
    .catch((err) => {
      console.log('Error Massage: ' + err.message);
    });
});
