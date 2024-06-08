let homeScoreText = document.getElementById('homeScore')
let awayScoreText = document.getElementById('awayScore')
let displayMessageText = document.getElementById('displayMessage')

let homeScore = 0
let awayScore = 0

function addScore(team, points) {
    if (team === 'home') {
        homeScore += points
        homeScoreText.innerHTML = homeScore
    } else if (team === 'away') {
        awayScore += points
        awayScoreText.innerHTML = awayScore
    }
    console.log(points + " points were added to " + team)
    displayMessageText.innerHTML = points + " points were added to " + team

    if (homeScore > awayScore) {
        homeScoreText.style.color = "green"
        awayScoreText.style.color = "lightcoral"
    } else if (awayScore > homeScore) {
        awayScoreText.style.color = "green"
        homeScoreText.style.color = "lightcoral"
    } else if (homeScore = awayScore) {
        awayScoreText.style.color = "lightcoral"
        homeScoreText.style.color = "lightcoral"
    }
}

function startNewGame() {
    homeScore = 0
    awayScore = 0    
    homeScoreText.innerHTML = homeScore
    awayScoreText.innerHTML = awayScore

    console.log("New Game")
    displayMessageText.innerHTML = "New Game"

    awayScoreText.style.color = "lightcoral"
    homeScoreText.style.color = "lightcoral"
}