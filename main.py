def on_bluetooth_connected():
    basic.show_leds("""
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        """)
    basic.pause(2000)
    basic.clear_screen()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    basic.pause(2000)
    basic.clear_screen()
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_uart_data_received():
    global btdata
    btdata = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
    serial.write_line(btdata)
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

btdata = ""
speed = 100

def on_forever():
    if input.button_is_pressed(Button.A):
        servos.P0.run(speed)
    if input.button_is_pressed(Button.B):
        servos.P1.run(0 - speed)
    if not (input.button_is_pressed(Button.A)):
        servos.P0.stop()
    if not (input.button_is_pressed(Button.B)):
        servos.P1.stop()
basic.forever(on_forever)
