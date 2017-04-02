#!/usr/bin/env node

let fs = require('fs');
let path = require('path');

let args = process.argv.slice(2); // i.e: node saveHash.js /home/omefire/Folder "424dsaew23sdfasd"

let folderName = args[0];
let fileName = path.join(folderName, '.esy_hash');
let hashToSave = args[1];

fs.writeFileSync(fileName, hashToSave);
