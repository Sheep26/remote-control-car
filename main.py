Speed = 75

def on_forever():
    if input.button_is_pressed(Button.A):
        servos.P0.run(Speed)
    if input.button_is_pressed(Button.B):
        servos.P1.run(Speed)
    if not (input.button_is_pressed(Button.A)):
        servos.P0.run(0)
    if not (input.button_is_pressed(Button.B)):
        servos.P1.run(0)
basic.forever(on_forever)
