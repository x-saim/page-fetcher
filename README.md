# 📄Page-Fetcher

## Description
The fetcher.js app is a node.js command line tool that downloads a file from a specified URL and saves it to a local file path. 

- The app takes two command line arguments: the URL of the file to download and the local file path to save the file. 

- The app uses the request library to make an HTTP request to the specified URL, and saves the response body to the specified local file path using the fs library. 
- Upon successful completion, the app prints out a message confirming the file has been saved, and the size of the file in bytes.

## Usage

To use the fetcher.js app, open your terminal and navigate to the directory where the fetcher.js file is located. Then run the following command:

```js
node fetcher.js [URL] [filepath]
```
Replace [URL] with the URL of the file you want to download, and [filepath] with the local file path where you want to save the file. For example:

```js
node fetcher.js https://www.google.com index.html
```