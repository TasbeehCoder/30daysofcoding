let total = 0

document.querySelector('#Zero').addEventListener('click', makeZero)
document.querySelector('#addThree').addEventListener('click', AddThree)
document.querySelector('#addFive').addEventListener('click', AddFive)
document.querySelector('#addNine').addEventListener('click', AddNine)
document.querySelector('#addTen').addEventListener('click', AddTen)
document.querySelector('#minusTwo').addEventListener('click', subTwo)
document.querySelector('#minusFour').addEventListener('click', subFour)
document.querySelector('#minusSix').addEventListener('click', subSix)


// Start form here functioning
function makeZero() {
    total = 0
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#Zero').style.backgroundColor = 'yellow'
    // document.querySelector('#Zero').style.color = 'white'
}
// for Three
function AddThree() {
    total += 3
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#addThree').style.backgroundColor = 'pink'
    // document.querySelector('#addThree').style.color = 'white'
}
// for Five
function AddFive() {
    total += 5
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#addFive').style.backgroundColor = 'aqua'
    document.querySelector('#addFive').style.color = 'white'
}
// for Nine

function AddNine() {
    total += 9
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#addNine').style.backgroundColor = 'purple'
    document.querySelector('#addNine').style.color = 'white'
}

// for Ten
function AddTen() {
    total += 10
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#addTen').style.backgroundColor = 'darkcyan'
    document.querySelector('#addTen').style.color = 'white'
}

// for sub tow
function subTwo() {
    total -= 2
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#minusTwo').style.backgroundColor = 'lightskyblue'
    document.querySelector('#minusTwo').style.color = 'white'
}
// for sub four
function subFour() {
    total -= 4
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#minusFour').style.backgroundColor = 'black'
    document.querySelector('#minusFour').style.color = 'white'

}

//for sub six
function subSix() {
    total -= 6
    document.querySelector('#placeToPutResult').innerText = total
    document.querySelector('#minusSix').style.backgroundColor = 'orchid'
    document.querySelector('#minusSix').style.color = 'white'
}