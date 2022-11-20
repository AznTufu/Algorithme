const btnAdd = document.querySelector(".btn-add")
const DivContainer = document.getElementById("div-container")
var somme = 4
let nbrBaton = document.querySelectorAll('.baton')
let limite = document.querySelectorAll('.baton')
btnAdd.addEventListener('click', function() {
    nbrBaton = addNew()
    limite = nbrBaton
})

function addNew() {
    somme += 1
    document.getElementById("affichage").innerHTML = somme
    const newDiv = document.createElement("div");
    newDiv.classList.add("baton");
    DivContainer.appendChild(newDiv);
    nbrBaton = document.querySelectorAll('.baton')
    return nbrBaton
}

let activePlayer = 'player 1'
switchPlayer(activePlayer)

function switchPlayer(activePlayer) {
    if (activePlayer == 'player 1') {
        player = activePlayer
        document.getElementById("namePlayer").innerHTML = player
        activePlayer = "player 2"
        return activePlayer
    } else {
        player = activePlayer
        document.getElementById("namePlayer").innerHTML = player
        activePlayer = "player 1"
        return activePlayer
    }
}

let remove_1 = document.querySelector('.remove_1')
let remove_2 = document.querySelector('.remove_2')
let remove_3 = document.querySelector('.remove_3')


if (activePlayer == 'player 1') {
    if (1 > nbrBaton.length) {
        console.log(activePlayer + " a perdu")
    } else {
        for (i = 0; i < 1; i++) {
            remove_1.addEventListener('click', function() {
                batonRemove(1)
                nbrBaton = document.querySelectorAll('.baton')
                return activePlayer = 'player 2'
            })
            remove_2.addEventListener('click', function() {
                batonRemove(2)
                nbrBaton = document.querySelectorAll('.baton')
                return activePlayer = 'player 2'
            })
            remove_3.addEventListener('click', function() {
                batonRemove(3)
                nbrBaton = document.querySelectorAll('.baton')
                return activePlayer = 'player 2'
            })
        }
    }
} else {
    if (1 > nbrBaton.length) {
        console.log(switchPlayer + " a perdu")
    } else {
        for (i = 0; i < 1; i++) {
            remove_1.addEventListener('click', function() {
                batonRemove(1)
                nbrBaton = document.querySelectorAll('.baton')
                return activePlayer = 'player 1'
            })
            remove_2.addEventListener('click', function() {
                batonRemove(2)
                nbrBaton = document.querySelectorAll('.baton')
                return activePlayer = 'player 1'
            })
            remove_3.addEventListener('click', function() {
                batonRemove(3)
                nbrBaton = document.querySelectorAll('.baton')
                return activePlayer = 'player 1'
            })
        }
    }
}


function batonRemove(x) {
    for (let i = 0; i < x; i++) {
        nbrBaton[i].remove()
        somme -= 1
        document.getElementById("affichage").innerHTML = somme
    }

}