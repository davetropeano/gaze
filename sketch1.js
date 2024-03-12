const DIAMETER = 50
const SECONDS = 1000
const NUMBER_BALLS = 10
let ball
let counter = 0

function setup() {
	new Canvas()
	ball = new Sprite()
	ball.diameter = DIAMETER
    ball.color = 'black'

    setInterval(move_sprite, 1*SECONDS)
    noLoop()
}

function move_sprite() {
    ball.x = random(DIAMETER, canvas.w-DIAMETER)
    ball.y = random(DIAMETER, canvas.h-DIAMETER)
    redraw()

    if (counter++ == NUMBER_BALLS)
        window.location = './index2.html'
    }

function draw() {
    clear()
}