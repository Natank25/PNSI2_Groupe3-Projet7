objets = [["Plante d'intérieur", 39.50], ["Haut parleur bluetooth portable", 990.00], ["Ensemble de couteaux de cuisine", 168.80], ["Tapis de yoga", 26.90], ["Peugeot 208", 19200.00], ["Télévision 4k Samsung", 559.00], ["Mascara à picots noirs", 22.90], ["Fajitas", 4.99], ["Schokobons", 7.79], ["Quad éléctrique", 113.83]]

let objet_rnd;
let image_src;
let mot;
let prix;

let centered_svg;
let image;
let txt_mot;
let user_input;
let user_input_validate;
let user_score;

let arrow_up;
let arrow_down;


let score = 0

window.addEventListener('load', function () {
   image = document.getElementById("juste_prix-img_below_text")
   txt_mot = document.querySelector(".juste_prix-text_above_img")
   centered_svg = document.querySelector(".centered_svg")

   arrow_up = this.document.querySelector(".juste_prix-arrow_up")
   arrow_down = this.document.querySelector(".juste_prix-arrow_down")

   user_score = document.querySelector(".juste_prix-score")
   user_score.innerHTML = "Votre score: " + score

   user_input = document.querySelector(".juste_prix-entrée_utilisateur")
   user_input.addEventListener("keypress", function (event) {
      if (event.code == "Enter" || event.code == "NumpadEnter") {
         validate()
      }
   })

   user_input_validate = document.querySelector(".juste_prix-entrée_utilisateur_validate")

   start_game()
})

function start_game() {
   objet_rnd = objets[Math.floor(Math.random() * objets.length)]

   mot = objet_rnd[0]
   prix = objet_rnd[1]

   console.log(`Mot :${mot} et prix :${prix}`)

   image_src = `images/${mot}.png`

   image.setAttribute("src", image_src)

   txt_mot.innerHTML = mot
}

function validate() {
   const proposition = user_input.value
   if (proposition != prix) { // Higer or lower
      if (proposition > prix) { // Set arrows to indacate lower
         arrow_down.style.scale = "40%"
         arrow_up.style.scale = "20%"

         arrow_down.style.opacity = "100%"
         arrow_up.style.opacity = "50%"
      } else { // Set arrows to indacate higher
         arrow_up.style.scale = "40%"
         arrow_down.style.scale = "20%"

         arrow_up.style.opacity = "100%"
         arrow_down.style.opacity = "50%"

      }
   } else { // WIN
      arrow_up.style.scale = "20%"
      arrow_down.style.scale = "20%"

      arrow_down.style.opacity = "50%"
      arrow_up.style.opacity = "50%"

      score += 1
      user_score.innerHTML = "Votre score: " + score
      start_game()

      // Confettis
      initConfetti();
      render();

   }

   user_input.select()
}
