input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.pause(100)
    falhas += -1
})
input.onButtonPressed(Button.A, function () {
    falhas = 0
    tempo = 0
    basic.showNumber(falhas)
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # # #
        # . . . .
        # . . . .
        `)
    basic.pause(200)
    soundExpression.spring.playUntilDone()
    basic.clearScreen()
    cronometroativo = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P2, function () {
    cronometroativo = 0
    basic.showLeds(`
        # # # . .
        . . # . .
        . . # # #
        . . . . #
        . . . . #
        `)
    basic.pause(200)
    basic.clearScreen()
    basic.showNumber(tempo / 10)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Falhas: ")
    basic.showNumber(falhas)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    falhas += 1
    basic.showIcon(IconNames.Skull)
    soundExpression.slide.play()
    basic.clearScreen()
})
let cronometroativo = 0
let tempo = 0
let falhas = 0
falhas = 0
tempo = 0
cronometroativo = 0
basic.showLeds(`
    # # # . #
    # . # . #
    # . # # #
    # . . . .
    # . . . .
    `)
basic.pause(200)
soundExpression.spring.playUntilDone()
basic.clearScreen()
cronometroativo = 1
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (cronometroativo == 1) {
        basic.pause(100)
        tempo += 1
    }
})
