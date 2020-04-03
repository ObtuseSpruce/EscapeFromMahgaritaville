let config = {
    width: 800,
    height: 800,
    // backgroundColor: 0xabcdef,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [Scene2, Scene1, Scene3]
    // {
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};

var player;
var wall;
var racetrack;
var finishline;
var timerInt;
var cursors;
var timernum = 0;
var score;
var t;
var scoreName;
var scoretext;
var LS_NAMES;
var LS_SCORE = 0;
var name;
var currentHighscore;

function compare () {
    if (LS_SCORE === 0) {
        localStorage.setItem('key', JSON.stringify(score));
        LS_SCORE = JSON.parse(localStorage.getItem('key'));
    }
    if(score <= LS_SCORE){
        localStorage.setItem('key', JSON.stringify(score));
        LS_SCORE = JSON.parse(localStorage.getItem('key'));
    }
}
function scoreUpdate () {
    score = (Math.floor((timernum * .02) * 100) / 100)
    compare();
    name = prompt('what is your name!')
}

function setHighscore () {
    localStorage.setItem('key', JSON.stringify(score));
    LS_SCORE = JSON.parse(localStorage.getItem('key'));
    console.log("localstorage: ", LS_SCORE);
}

function onEvent () {
    timernum++
    // console.log(score)
}

let game = new Phaser.Game(config);
// game.scene.add('titleScene')
// game.scene.start('titleScene')


