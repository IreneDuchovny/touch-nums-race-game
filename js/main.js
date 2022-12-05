'use strict'

var gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const EASY = 4
const HARD = 5
const EXTREME = 6
var gExNextNum = 1
var gTotalSeconds = -1;
var gDiffculty
var gIntervalId
var gStartInterval = true

function initGame() {
    gExNextNum = 1
    runTimer()
    var elNextNum = document.querySelector('.next-num')
    elNextNum.innerText = 'next number:' + gExNextNum
    gNums = shuffleNums(gNums)
    renderBoard()
    gDiffculty = EASY * EASY
}

function shuffleNums(items) {
    var randIdx, keep;
    for (var i = items.length - 1; i > 0; i--) {
        randIdx = getRandomInt(0, items.length);
        keep = items[i];
        items[i] = items[randIdx];
        items[randIdx] = keep;
    }
    return items;

}
// console.log(gNums)


function renderBoard() {
    var strHTML = ''

    for (var i = 0; i < EASY; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < EASY; j++) {
            var cell = gNums.pop()
            // console.log(cell)
            // var className = (cell) ? 'occupied' : ''
            var cellData = `data="${cell}"`

            strHTML += `<td class="cell" ${cellData}
            onclick="cellClicked(${cell})" >${cell}</td>`
        }
        strHTML += '</tr>\n'
    }
    console.log(strHTML)
    var elBoard = document.querySelector('.game')
    elBoard.innerHTML = strHTML

}

function endGameMsg() {
    alert("thanks for playing")
}

function cellClicked(clickedNum) {
    if (gStartInterval){
    gIntervalId = setInterval(runTimer, 1000);
    // if (clickedNum ===16){
    //     runTimer
    // }
gStartInterval = false
    }
    if (clickedNum === gExNextNum) {
        console.log('Clicked Correct ', gExNextNum)
        gExNextNum++
        console.log(`data="${clickedNum}"`)
        // data-i="${clickedNum}"
        var elCell = document.querySelector(`[data="${clickedNum}"]`)
        elCell.style.backgroundColor = "#ff8080"
        console.log(gNums.length)
        if (clickedNum === gDiffculty) {

            endGameMsg()
        }
    }
    var elNextNum = document.querySelector('.next-num')
    elNextNum.innerText = 'next number:' + gExNextNum
    console.log(clickedNum)



}

//TODO: miliseconds
function runTimer() {
    var elTimeLabel = document.querySelector(".game-time");

    ++gTotalSeconds;
    elTimeLabel.innerText = 'Play time:' + gTotalSeconds
    // secondsLabel.innerHTML = pad(totalSeconds % 60);
    // minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));

}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

