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
args = args.slice(2); //reassigning array to args and ignoring the  node executable and file path.

//args[0] = URL index
//args[1] = filepath
const fetcher = (args[0], args[1]) => {

  request(args[0], (error, response, body)) => {
    //
  }

};
