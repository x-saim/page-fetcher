/*
Implement a node app called fetcher.js.

It should take two command line arguments:

a URL
a local file path
It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

*/
const request = require('request');
const fs = require('fs');

let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the node executable and file path.

//args[0] = URL index
//args[1] = filepath

//nested callbacks
const fetcher = (ULR, filepath) => {

  request(args[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
    }

    console.log(`You have successfully written the request domain's (${args[0]}) content to the file: ${args[1]}.`);

    fs.stat(args[1], (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      const fileSize = stats.size;
      console.log(`The file: ${args[1]} has a file size of ${fileSize} bytes.`);
    });

  });
  }

)};

fetcher(args[0], args[1]);
