let images = ["img/bananes.png", "img/bananes.png", "img/cerises.png", "img/cerises.png", "img/fraise.png", "img/fraise.png", "img/kiwi.png", "img/kiwi.png", "img/noix de coco.png", "img/noix de coco.png", "img/pastèque.png", "img/pastèque.png", "img/poires.png", "img/poires.png", "img/mûrs.png", "img/mûrs.png",]

let cartes;

let first_card;
let second_card;

let hasFlippedCard = false;
let isImageProcessing = false;

let winCounter = 0;

let score = 0;

function start() {
  images = shuffleArray(images)

  let counter = 0;

  for (let x = 1; x < 5; x++) {
    for (let y = 1; y < 5; y++) {
      document.getElementById(String(`memory-${x}_${y}`)).setAttribute("src", images[counter])
      counter++;

    }
  }


}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {

    // Generate random number 
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

window.onload = (event) => {
  start()
}

function reveal(carte) {
  flip_card(carte)
  check_card(carte)
}


function flip_card(carte) {
  if (isImageProcessing) return;
  document.getElementById(String(`flip-box-inner_${carte}`)).style.transform = "rotateY(180deg)"
}

function check_card(carte) {
  if (isImageProcessing) return;

  if (!hasFlippedCard) {
    first_card = document.getElementById(String(`flip-box-inner_${carte}`))
    hasFlippedCard = true;
  } else {
    isImageProcessing = true;

    second_card = document.getElementById(String(`flip-box-inner_${carte}`))


    if (second_card.getElementsByTagName("img")[0].getAttribute("src") == first_card.getElementsByTagName("img")[0].getAttribute("src")) {
      console.log("WIN")
      winCounter++

      first_card.parentElement.setAttribute("onclick", "")
      second_card.parentElement.setAttribute("onclick", "")

      if (winCounter == 8) {
        setTimeout(() => {
          for (let x = 1; x < 5; x++) {
            for (let y = 1; y < 5; y++) {
              document.getElementById(String(`flip-box-inner_${x}_${y}`)).style.transform = "rotate(0deg)"
              document.getElementById(String(`flip-box_${x}_${y}`)).setAttribute("onclick", `reveal("${x}_${y}")`)
            }
          }

        }, 2500)

        setTimeout(() => {
          start()
        }, 3300)

        score++;

        document.querySelector(".memory-score").innerHTML = `Votre score: ${score}`

        // Confettis
        initConfetti();
        render();
      }

      isImageProcessing = false;

    } else {
      setTimeout(() => {
        first_card.style.transform = "rotateY(0deg)"
        second_card.style.transform = "rotateY(0deg)"

        isImageProcessing = false
      }, 1000)
    }

    hasFlippedCard = false

  }


}