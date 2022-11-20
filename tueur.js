class survivant {
    constructor(name, stat) {
        this.name = name
        this.stat = stat
    }
    toString() {
        return `${this.name}`
    }
}
class stat {
    constructor(type, mort, degat, mortDegat) {
        this.type = type;
        this.mort = mort;
        this.damage = degat;
        this.mortDegat = mortDegat;
    }
    isMort() {
        let i = Math.random(0, 1)
        if (i > this.mort) {
            return true
        } else {
            return false
        }
    }

    isDamage() {
        let i = Math.random(0, 1)
        if (i < this.degat) {
            return true
        } else {
            return false
        }
    }

    isMortDamage() {
        let i = Math.random(0, 1)
        if (i < this.mortDegat) {
            return true
        } else {
            return false
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let survivor = ['Anissa', 'Javier', 'Biss', 'Duran', 'John'];

function statistique() {
    let stats = [
        new stat("nerd", 0.7, 0.5, 0.7),
        new stat("sportif", 0.1, 0.9, 0.2),
        new stat("blonde", 0.3, 0.7, 0.6)
    ];
    let RandomStat = stats[getRandomInt(3)]
    return RandomStat;
}

var Jason = 100
estVivant = true
let player;
dead = []
number = 5
while (estVivant && number > 0) {
    RandomName = survivor[getRandomInt(5)]
    const RandomStat = statistique()
    player = new survivant(RandomName, RandomStat)
    if (Jason < 0) {
        console.log("jason est mort")
        estVivant = false
    } else {
        if (RandomStat.isMort()) {
            console.log("Jason a tué " + player)
            number--
            dead.push(player)
        } else {
            if (RandomStat.isDamage()) {
                Jason = Jason - 10
                console.log(player + "a esquivé et a infligé 10 dmg")
            } else {
                if (RandomStat.isMortDamage()) {
                    Jason = Jason - 15
                    console.log(player + "a infligé 15 dmg mais meurt")
                    number--
                    dead.push(player)
                } else {
                    Jason = Jason - 10
                    console.log(player + "a esquivé et a infligé 10 dmg")
                }
            }
        }
    }
}

if (estVivant) {
    console.log("Jason est en vie et à décimé l'équipe de choc avec " + Jason + " vie")
} else {
    console.log("Les survivants ont gagné mais RIP à " + dead)
}