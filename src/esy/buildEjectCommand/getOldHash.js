#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

let args = process.argv.slice(2); // i.e: node getOldHash.js /home/omefire/Folder

let folderName = args[0];
let fileName = path.join(folderName, '.esy_hash');

if(fs.existsSync(fileName)) {
    throw new Exception('Hash file not available');
}

let fileContent = fs.readFileSync(fileName, {
    encoding: 'utf8'
});

console.log(fileContent);
