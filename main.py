def on_received_value(name, value):
    if name == "move":
        if value == 1:
            servos.P0.run(speed)
        if value == 2:
            servos.P1.run(speed)
    if name == "stopall":
        servos.P0.run(0)
        servos.P1.run(0)
    if name == "stop":
        if value == 1:
            servos.P0.run(0)
        if value == 2:
            servos.P1.run(0)
radio.on_received_value(on_received_value)

speed = 0
speed = 75
radio.set_group(2)

def on_forever():
    if input.button_is_pressed(Button.A):
        servos.P0.run(speed)
    if input.button_is_pressed(Button.B):
        servos.P1.run(speed)
    if not (input.button_is_pressed(Button.A)):
        servos.P0.run(0)
    if not (input.button_is_pressed(Button.B)):
        servos.P1.run(0)
basic.forever(on_forever)
