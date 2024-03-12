const DIAMETER = 50
const SECONDS = 1000
const NUMBER_BALLS = 10
let ball, greenball
let counter = 0

function setup() {
	new Canvas()
	ball = new Sprite()
	ball.diameter = DIAMETER
    ball.color = 'red'

    greenball = new Sprite()
    greenball.diameter = DIAMETER
    greenball.color = 'green'
    greenball.visible = false

    setInterval(move_sprite, 1*SECONDS)
    noLoop()
}

function move_sprite() {
    ball.x = random(DIAMETER, canvas.w-DIAMETER)
    ball.y = random(DIAMETER, canvas.h-DIAMETER)

    if (random(0,100) > 80) {
        greenball.x = random(DIAMETER, canvas.w-DIAMETER)
        greenball.y = random(DIAMETER, canvas.h-DIAMETER)
        greenball.visible = true
    }
    else {
        greenball.visible = false
    }

    redraw()

    if (counter++ == NUMBER_BALLS)
        window.location = './index3.html'
    }

function draw() {
    clear()
}