'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
// Print two space-separated integers describing the perspective numbers of times her best (higest)
// Score increased and her worst (lowest) score decreased. 
function breakingRecords(scores) {
  let highAndLow = [0, 0];
  let currentLowScore = scores[0],
      currentHighScore = scores[0];
  //loop through the scores
  //update low and high scores if largest or smaller
  //update counting array if score is broken

  scores.forEach(score => {
    if(score > currentHighScore){
      currentHighScore = score;
      highAndLow[0]++;
    }
    else if(score < currentLowScore){
        currentLowScore = score;
        highAndLow[1]++;
    }
     
  });

  return highAndLow;
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
