let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScoreEl.textContent = homeScore
    homeScore += 1
}

function increaseHomeScoreTwo(){
    homeScoreEl.textContent = homeScore
    homeScore += 2
}

function increaseHomeScoreThree(){
    homeScoreEl.textContent = homeScore
    homeScore += 3
}


let guestScoreBtn = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function increaseGuestScoreOne(){
    guestScoreEl.textContent = guestScore
    guestScore += 1
}
function increaseGuestScoreTwo(){
    guestScoreEl.textContent = guestScore
    guestScore += 2
}
function increaseGuestScoreThree(){
    guestScoreEl.textContent = guestScore
    guestScore += 3
}