let speed = 75
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.run(speed)
    }
    if (input.buttonIsPressed(Button.B)) {
        servos.P1.run(speed)
    }
    if (!(input.buttonIsPressed(Button.A))) {
        servos.P0.run(0)
    }
    if (!(input.buttonIsPressed(Button.B))) {
        servos.P1.run(0)
    }
})
