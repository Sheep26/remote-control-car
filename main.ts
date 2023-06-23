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
        servos.P0.stop()
        servos.P1.stop()
    }
    if (name == "stop") {
        if (value == 1) {
            servos.P0.stop()
        }
        if (value == 2) {
            servos.P1.stop()
        }
    }
})
let speed = 0
speed = 100
basic.forever(function () {
    radio.setGroup(2)
    if (false) {
        if (input.buttonIsPressed(Button.A)) {
            servos.P0.run(speed)
        }
        if (input.buttonIsPressed(Button.B)) {
            servos.P1.run(speed)
        }
        if (!(input.buttonIsPressed(Button.A))) {
            servos.P0.stop()
        }
        if (!(input.buttonIsPressed(Button.B))) {
            servos.P1.stop()
        }
    }
})
