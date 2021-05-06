const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Game {
    constructor(){
        this.initialize()
        this.generateSequence
        this.nextLevel
    }
    initialize(){
        btnEmpezar.classList.add('hide')
        this.level = 1
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generateSequence(){
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.lightSequence()
    }

    transformNumberToColor(num){
        switch (num) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    lightSequence(){
        for (let i = 0; i < this.level; i++){
            const color = this.transformNumberToColor(this.sequence[i])
            setTimeout(() => this.lightColor(color), 1000 * i) 
        }
    }
    lightColor(color){
        this.colors[color].classList.add('light')
        setTimeout(()=> this.douseColor(color), 3500)
    }

    douseColor(color) {
        this.colors[color].classList.remove('light')
    }
}

function empezarJuego() {
    // alert('This game is about to start')
    window.game = new Game()
}