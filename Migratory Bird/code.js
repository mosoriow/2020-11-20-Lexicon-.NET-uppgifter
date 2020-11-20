'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    var temp=[0,0,0,0,0,0,0];
    var bigger=0;
    var index=0;
    
    for(var i=0;i<arr.length;i++) {
        temp[arr[i]]++;
    }
    
    for(var i=1;i<=5;i++) {
        if(bigger<temp[i]) {
            bigger=temp[i];
            index=i;
        }
    }
    
    return index;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
