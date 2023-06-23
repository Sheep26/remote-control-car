def on_received_value(name, value):
    if name == "move":
        if value == 1:
            servos.P0.run(speed)
        if value == 2:
            servos.P1.run(-speed)
        if value == 3:
            servos.P0.run(speed)
            servos.P1.run(-speed)
    if name == "stopall":
        servos.P0.stop()
        servos.P1.stop()
    if name == "stop":
        if value == 1:
            servos.P0.stop()
        if value == 2:
            servos.P1.stop()
radio.on_received_value(on_received_value)

speed = 0
speed = 100

def on_forever():
    radio.set_group(2)
    if False:
        if input.button_is_pressed(Button.A):
            servos.P0.run(speed)
        if input.button_is_pressed(Button.B):
            servos.P1.run(-speed)
        if not (input.button_is_pressed(Button.A)):
            servos.P0.stop()
        if not (input.button_is_pressed(Button.B)):
            servos.P1.stop()
basic.forever(on_forever)
