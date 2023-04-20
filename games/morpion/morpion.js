let haut_gauche;
let haut_milieu;
let haut_droit;
let centre_gauche;
let centre_milieu;
let centre_droit;
let bas_gauche;
let bas_milieu;
let bas_droit;

let lignes;

let cases;

let rect_replay;
let text_replay;

let textp1;
let textp2

let svg;

window.addEventListener('load', function () {
    haut_gauche = document.getElementById('haut_gauche')
    haut_milieu = document.getElementById('haut_milieu')
    haut_droit = document.getElementById('haut_droit')
    centre_gauche = document.getElementById('centre_gauche')
    centre_milieu = document.getElementById('centre_milieu')
    centre_droit = document.getElementById('centre_droit')
    bas_gauche = document.getElementById('bas_gauche')
    bas_milieu = document.getElementById('bas_milieu')
    bas_droit = document.getElementById('bas_droit')

    cases = [haut_gauche, haut_milieu, haut_droit, centre_gauche, centre_milieu, centre_droit, bas_gauche, bas_milieu, bas_droit]

    lignes = [
        [haut_gauche, haut_milieu, haut_droit],
        [centre_gauche, centre_milieu, centre_droit],
        [bas_gauche, bas_milieu, bas_droit],

        [haut_gauche, centre_gauche, bas_gauche],
        [haut_milieu, centre_milieu, bas_milieu],
        [haut_droit, centre_droit, bas_droit],

        [haut_gauche, centre_milieu, bas_droit],
        [haut_droit, centre_milieu, bas_gauche]
    ]

    rect_replay = document.getElementById("panel_replay")
    text_replay = document.getElementById("text_replay")

    rect_replay.style.display = "none"
    text_replay.style.display = "none"

    textp1 = document.getElementById('p1')
    textp2 = document.getElementById('p2')

    svg = document.querySelector(".svg_playground")

    cases.forEach(element => {
        element.style.opacity = "0%"
    });

})

let joueur = "p1" // p1 = joueur1 & p2 = joueur 2

function swap_player() {


    if (joueur == "p1") {
        joueur = "p2"
        textp1.style.opacity = "50%"
        textp2.style.opacity = "100%"
    } else {
        joueur = "p1"
        textp1.style.opacity = "100%"
        textp2.style.opacity = "50%"
    }

}

function draw_cross(elem) {
    const x = parseInt(elem.getAttribute("x")) + 15
    const y = parseInt(elem.getAttribute("y")) + 15

    var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line1.setAttribute("x1", x)
    line1.setAttribute("y1", y)
    line1.setAttribute("x2", x + 80)
    line1.setAttribute("y2", y + 80)
    line1.setAttribute("stroke", 'red')
    line1.setAttribute("stroke-width", "10");
    line1.setAttribute("stroke-linecap", "round");
    line1.setAttribute("class", "shape")
    svg.appendChild(line1);

    var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line2.setAttribute("x1", x + 80)
    line2.setAttribute("y1", y)
    line2.setAttribute("x2", x)
    line2.setAttribute("y2", y + 80)
    line2.setAttribute("stroke", 'red')
    line2.setAttribute("stroke-width", "10");
    line2.setAttribute("stroke-linecap", "round");
    line2.setAttribute("class", "shape")
    svg.appendChild(line2);
}

function draw_circle(elem) {
    const x = parseInt(elem.getAttribute("x")) + 5
    const y = parseInt(elem.getAttribute("y")) + 5

    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x + 50)
    circle.setAttribute("cy", y + 50)
    circle.setAttribute("r", 40)
    circle.setAttribute("fill", "rgb(8, 92, 8)")
    circle.setAttribute("stroke", 'blue')
    circle.setAttribute("stroke-width", "10");
    circle.setAttribute("class", "shape")
    svg.appendChild(circle);

}

function draw_shape(elem) {
    if (joueur == "p1") {
        draw_cross(elem)
    } else {
        draw_circle(elem)
    }

    elem.setAttribute("onclick", "")
}

function set_haut_gauche(elem) {

    draw_shape(elem)

    if (haut_gauche.style.fill != "") return;

    if (joueur == "p1") {
        haut_gauche.style.fill = "red"
    } else {
        haut_gauche.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_haut_milieu(elem) {

    draw_shape(elem)

    if (haut_milieu.style.fill != "") return;

    if (joueur == "p1") {
        haut_milieu.style.fill = "red"
    } else {
        haut_milieu.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_haut_droit(elem) {

    draw_shape(elem)

    if (haut_droit.style.fill != "") return;

    if (joueur == "p1") {
        haut_droit.style.fill = "red"
    } else {
        haut_droit.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_centre_gauche(elem) {

    draw_shape(elem)

    if (centre_gauche.style.fill != "") return;

    if (joueur == "p1") {
        centre_gauche.style.fill = "red"
    } else {
        centre_gauche.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_centre_milieu(elem) {

    draw_shape(elem)

    if (centre_milieu.style.fill != "") return;

    if (joueur == "p1") {
        centre_milieu.style.fill = "red"
    } else {
        centre_milieu.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_centre_droit(elem) {

    draw_shape(elem)

    if (centre_droit.style.fill != "") return;

    if (joueur == "p1") {
        centre_droit.style.fill = "red"
    } else {
        centre_droit.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_bas_gauche(elem) {

    draw_shape(elem)

    if (bas_gauche.style.fill != "") return;

    if (joueur == "p1") {
        bas_gauche.style.fill = "red"
    } else {
        bas_gauche.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_bas_milieu(elem) {

    draw_shape(elem)

    if (bas_milieu.style.fill != "") return;

    if (joueur == "p1") {
        bas_milieu.style.fill = "red"
    } else {
        bas_milieu.style.fill = "blue"
    }

    swap_player()
    detect_win()
}
function set_bas_droit(elem) {

    draw_shape(elem)

    if (bas_droit.style.fill != "") return;

    if (joueur == "p1") {
        bas_droit.style.fill = "red"
    } else {
        bas_droit.style.fill = "blue"
    }

    swap_player()
    detect_win()
}


function detect_win() {
    lignes.forEach(ligne => {
        if (ligne[0].style.fill != "" && ligne[0].style.fill == ligne[1].style.fill && ligne[0].style.fill == ligne[2].style.fill) {
            if (ligne[0].style.fill == "red") {
                textp1.innerHTML = textp1.innerHTML + "  👑"
            } else {
                textp2.innerHTML = textp2.innerHTML + "  👑"
            }

            var completion_line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            completion_line.setAttribute("x1", parseInt(ligne[0].getAttribute("x")) + 55)
            completion_line.setAttribute("y1", parseInt(ligne[0].getAttribute("y")) + 55)
            completion_line.setAttribute("x2", parseInt(ligne[2].getAttribute("x")) + 55)
            completion_line.setAttribute("y2", parseInt(ligne[2].getAttribute("y")) + 55)
            completion_line.setAttribute("stroke", 'gray')
            completion_line.setAttribute("stroke-width", "14");
            completion_line.setAttribute("stroke-linecap", "round");
            completion_line.setAttribute("class", "shape")
            svg.appendChild(completion_line);

            // Confettis
            initConfetti();
            render();

            finish()
            swap_player()
        }
    });

    if (cases[0].style.fill != "" && cases[1].style.fill != "" && cases[2].style.fill != "" && cases[3].style.fill != "" && cases[4].style.fill != "" && cases[5].style.fill != "" && cases[6].style.fill != "" && cases[7].style.fill != "" && cases[8].style.fill != "") {
        finish()
    }
}

function finish() {
    rect_replay.style.display = "block"
    text_replay.style.display = "block"

    cases.forEach(sing_case => {
        sing_case.setAttribute("onclick", "")
    });
}

function replay() {
    swap_player()

    haut_gauche.style.fill = ""
    haut_milieu.style.fill = ""
    haut_droit.style.fill = ""
    centre_gauche.style.fill = ""
    centre_milieu.style.fill = ""
    centre_droit.style.fill = ""
    bas_gauche.style.fill = ""
    bas_milieu.style.fill = ""
    bas_droit.style.fill = ""

    haut_gauche.setAttribute("onclick", "set_haut_gauche(this)")
    haut_milieu.setAttribute("onclick", "set_haut_milieu(this)")
    haut_droit.setAttribute("onclick", "set_haut_droit(this)")
    centre_gauche.setAttribute("onclick", "set_centre_gauche(this)")
    centre_milieu.setAttribute("onclick", "set_centre_milieu(this)")
    centre_droit.setAttribute("onclick", "set_centre_droit(this)")
    bas_gauche.setAttribute("onclick", "set_bas_gauche(this)")
    bas_milieu.setAttribute("onclick", "set_bas_milieu(this)")
    bas_droit.setAttribute("onclick", "set_bas_droit(this)")

    rect_replay.style.display = "none"
    text_replay.style.display = "none"

    textp1.innerHTML = "Joueur 1 (Croix)"
    textp2.innerHTML = "Joueur 2 (Cercles)"

    document.querySelectorAll(".shape").forEach(shape => {
        shape.remove()
    })
}