y = 0
x = 0
led.plot(x, y)

def on_button_pressed_a():
    led.plot(randint(0, 4), randint(0, 4))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    global x,y
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    global x,y
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    global x,y
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    global x,y
    led.unplot(x, y)
    y += -1
    led.plot(x, y)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

