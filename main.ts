radio.onReceivedValue(function (name, value) {
    if (name == "move") {
        if (value == 1) {
            servos.P0.run(speed)
        }
        if (value == 2) {
            servos.P1.run(speed)
        }
        if (value == 3) {
            servos.P0.run(speed)
            servos.P1.run(speed)
        }
    }
    if (name == "stopall") {
        servos.P0.run(0)
        servos.P1.run(0)
    }
    if (name == "stop") {
        if (value == 1) {
            servos.P0.run(0)
        }
        if (value == 2) {
            servos.P1.run(0)
        }
    }
})
let speed = 0
speed = 75
radio.setGroup(2)
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
