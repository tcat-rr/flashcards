import data from '../data/songs.json' assert { type: 'json' };
console.log(data);

document.querySelector('#nextq').addEventListener('click', choose_question);
document.querySelector('#guess').addEventListener('click', show_answer);
document.querySelector('#nextq').style.display = 'none';

var num = 1;
var lineCount;
var songData;
          
var url = window.location.search;
var urlParams = new URLSearchParams(url);
var song = urlParams.get("game")

document.querySelector('#gameTitle').append("\"" + song + "\"");

songData = data["Songs"][song]["Song"];

console.log(songData);

lineCount = Object.keys(songData).length;

console.log(lineCount);

choose_question();

function choose_question() {
    const rand = randomIntFromInterval(1, lineCount);

    console.log("Rand:" + rand);
    
    var question = songData[Object.keys(songData)[rand]]["Question"];
    
    console.log("Q: " + question);
    
    document.querySelector('#question').innerHTML = question;
    
    var answer = songData[Object.keys(songData)[rand]]["Answer"];
    
    document.querySelector('#answer').style.visibility = 'hidden';
    document.querySelector('#answer').innerHTML = answer;
    document.querySelector('#myAnswer').value = '';
    
    document.querySelector('#guess').style.display = 'inline-block';
    document.querySelector('#nextq').style.display = 'none';
}

function show_answer() {
    document.querySelector('#answer').style.visibility = 'visible';
    document.querySelector('#guess').style.display = 'none';
    document.querySelector('#nextq').style.display = 'inline-block';
}

function randomIntFromInterval(min, max) { // min and max included 
    console.log("Min: " + min);
    console.log("Max: " + max);
    
    return Math.floor(Math.random() * (max - min + 1) + min) - 1
}