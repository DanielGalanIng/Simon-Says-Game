const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const LAST_LEVEL = 6

class Game {
    constructor(){
        this.initialize = this.initialize.bind(this)
        this.initialize()
        this.generateSequence()
        setTimeout(this.nextLevel(), 500)
    }
    initialize(){
        this.nextLevel = this.nextLevel.bind(this)
        this.choseColor = this.choseColor.bind(this)
        this.toggleBtnEmpezar()
        this.level = 1
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        }else{
            btnEmpezar.classList.add('hide')
        }
    }

    generateSequence(){
        this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.subLevel = 0
        this.lightSequence()
        this.clickEvent()
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
    transformColorToNumber(color){
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
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
        setTimeout(()=> this.douseColor(color), 350)
    }

    douseColor(color) {
        this.colors[color].classList.remove('light')
    }

    clickEvent() {
        this.colors.celeste.addEventListener('click', this.choseColor)
        this.colors.violeta.addEventListener('click', this.choseColor)
        this.colors.naranja.addEventListener('click', this.choseColor)
        this.colors.verde.addEventListener('click', this.choseColor)
    }
    killClickEvent() {
        this.colors.celeste.removeEventListener('click', this.choseColor)
        this.colors.violeta.removeEventListener('click', this.choseColor)
        this.colors.naranja.removeEventListener('click', this.choseColor)
        this.colors.verde.removeEventListener('click', this.choseColor)
    }

    choseColor(ev) {
        const colorName = ev.target.dataset.color
        const colorNumber = this.transformColorToNumber(colorName)
        this.lightColor(colorName)
        if (colorNumber === this.sequence[this.subLevel]) {
            this.subLevel++
            if (this.subLevel === this.level) {
                this.level++
                this.killClickEvent()
                if (this.level === (LAST_LEVEL + 1)) {
                    this.gameWin()
                }else{
                    setTimeout(this.nextLevel.bind(this), 1200) 
                }
            }
        }else {
            this.gameOver()
        }
    }

    gameWin() {
        swal('Great', 'You win!', 'success')
            .then(this.initialize)
    }

    gameOver() {
        swal('ohhhh', 'You lose :(', 'error')
            .then(() => {
                this.killClickEvent()
                this.initialize()
            })
    }
}

function empezarJuego() {
    // alert('This game is about to start')
    game = new Game()
}