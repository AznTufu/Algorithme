let musique = ['Anissa', 'Javier', 'Biss', 'Duran', 'John'];
estVivant = true
i = 30
john = 10
while (estVivant && i > 0) {
    a = getRandomInt(5)
    musique[a]
        // console.log(a)
    if (musique[a] == 'Anissa') {
        john--
        i--
        console.log(i + " feux rouges " + musique[a])
        if (john < 0) {
            estVivant = false
            console.log("explosion")
        }
    } else {
        i--
        console.log(i + " feux rouges " + musique[a])
    }
}
if (estVivant) {
    console.log("tu es bien arrivé et tu as changé " + (10 - john) + " fois de taxi")
} else {
    console.log("explosion")
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}