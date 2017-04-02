#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

let args = process.argv.slice(2); // i.e: node doesHashExist.js MyFolderName

let folderName = args[0];

let doesFileExist = fs.existsSync(path.join(folderName, '.esy_hash'));

if(doesFileExist) {
    console.log('true');
} else {
    console.log('false');
}

