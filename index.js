// javascript
//let firstCard = ""
//let secondCard = ""
//let newcard = ""
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let startBtn = document.getElementById("start-btn")
let newcardBtn = document.getElementById("newcard-btn")
let cardsArr = []
let sum = 0
let hasBlackJack = false
let isAlive = false

let player = {
    name: "Per",
    chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getrandomCard() {
        let randomCard = Math.floor (Math.random () * 13) + 1
        
         if ( randomCard > 10) {
        return 10
    } else if ( randomCard === 1) {
        return 11
    } else {
        return  randomCard
    }
        

}


function rendergame() {
   
    cardsEl.textContent = "Cards: " + cardsArr 
  let message = ""
  //let sum = firstCard + secondCard
    if ( sum <= 20 ) {
    message = "Draw a new card"
    
    } else if (sum === 21 ) {
         message = "you have got black jack!"
         hasBlackJack = true
    } else  {
          message = "You're out of the game!"
          isAlive = false
    }
    messageEl.textContent = message
    
    
}


startBtn.addEventListener('click', function() {
        isAlive = true
        let firstCard = getrandomCard()
        let secondCard = getrandomCard()
        cardsArr = [firstCard, secondCard]
        sum = firstCard + secondCard
        //console.log(sum)
        cardsEl.textContent = firstCard + secondCard
        sumEl.textContent = "Sum: " + sum
        rendergame()
})



newcardBtn.addEventListener('click', function() {
    
    if ( isAlive === true && hasBlackJack === false) {
         let newcard = getrandomCard()
        cardsArr.push(newcard)
        cardsEl.textContent +=  " " + newcard 
        sum += newcard
        //console.log(sum)
        sumEl.textContent =  "Sum: " + sum
        rendergame()
    }
   
})

