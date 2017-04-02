#!/usr/bin/env node

let fs = require('fs');
let path = require('path');
let hasher = require('folder-hash'); // ToDO: Test this!

let args = process.argv.slice(2); // i.e: node getOldHash.js MyFolderName

let folderName = args[0];

// ToDO: What version of node ?
// Would the installed version support promises ?
// How to return only the string with no promises ? Yes
return hasher.hashElement(folderName).then(function(hash) {
    // Note: print the hash to the console so that it gets picked up by the bash script that will call it
    console.log(hash['hash']); 
});
