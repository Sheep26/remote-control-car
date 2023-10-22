bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(2000)
    basic.clearScreen()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    btdata = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    serial.writeLine(btdata)
})
let btdata = ""
let speed = 100
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.run(speed)
    }
    if (input.buttonIsPressed(Button.B)) {
        servos.P1.run(0 - speed)
    }
    if (!(input.buttonIsPressed(Button.A))) {
        servos.P0.stop()
    }
    if (!(input.buttonIsPressed(Button.B))) {
        servos.P1.stop()
    }
})
