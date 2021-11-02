let y = 0
let x = 0
led.plot(x, y)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    led.plot(randint(0, 4), randint(0, 4))
})
input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
input.onGesture(Gesture.LogoDown, function on_gesture_logo_down() {
    
    led.unplot(x, y)
    y += -1
    led.plot(x, y)
})
