const request = require('request');
const fs = require('fs');

let args = process.argv;
args = args.slice(2); //reassigning array to args and ignoring the node executable and file path.

//args[0] = URL index
//args[1] = filepath

//nested callbacks
const fetcher = (link, filepath) => {
  request(link, (error, response, body) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    //Edge Case 3: Check for if URL results in an error or non-200 result?
    if (response.statusCode !== 200) {
      console.error(`Error: Invalid URL: ${link}`);
      return;
    }
    console.log('statusCode:', response && response.statusCode);

  if(!filepath) {
    console.error(err);
    return;
  } 
  fs.writeFile(filepath, body, err => {
    if (err) {
      console.error(err);
    }

    console.log(`You have successfully written the request domain's (${link}) content to the file: ${filepath}.`);

    fs.stat(filepath, (err, stats) => {
      if (err) {
        console.error(err);
        return;
      }
      const fileSize = stats.size;
      console.log(`The file: ${filepath} has a file size of ${fileSize} bytes.`);
    });

  });
  }

)};

fetcher(args[0], args[1]);