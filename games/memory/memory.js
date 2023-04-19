let images = ["img/bananes.png", "img/bananes.png", "img/cerises.png", "img/cerises.png", "img/fraise.png", "img/fraise.png", "img/kiwi.png", "img/kiwi.png", "img/noix de coco.png", "img/noix de coco.png", "img/pastèque.png", "img/pastèque.png", "img/poires.png", "img/poires.png", "img/mûrs.png", "img/mûrs.png",]

let cartes;

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

function reveal_1_1() {
  flip_card("1_1")
}

function reveal_1_2() {
  flip_card("1_2")
}

function reveal_1_3() {
  flip_card("1_3")
}

function reveal_1_4() {
  flip_card("1_4")
}

function reveal_2_1() {
  flip_card("2_1")
}

function reveal_2_2() {
  flip_card("2_2")
}

function reveal_2_3() {
  flip_card("2_3")
}

function reveal_2_4() {
  flip_card("2_4")
}

function reveal_3_1() {
  flip_card("3_1")
}

function reveal_3_2() {
  flip_card("3_2")
}

function reveal_3_3() {
  flip_card("3_3")
}

function reveal_3_4() {
  flip_card("3_4")
}

function reveal_4_1() {
  flip_card("4_1")
}

function reveal_4_2() {
  flip_card("4_2")
}

function reveal_4_3() {
  flip_card("4_3")
}

function reveal_4_4() {
  flip_card("4_4")
}

function flip_card(carte) {
  document.getElementById(String(`flip-box-inner_${carte}`)).style.transform = "rotateY(180deg)"
}