let y = 0
let x = 0
let x_punct = 0
let y_punct = 0
led.plot(x, y)
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    x_punct = randint(0, 4)
    y_punct = randint(0, 4)
    led.plot(x_punct, y_punct)
})
//  verific daca x == x_punct si y == y_punct
input.onGesture(Gesture.LogoUp, function on_gesture_logo_up() {
    
    led.unplot(x, y)
    y += 1
    led.plot(x, y)
})
//  verific daca x == x_punct si y == y_punct
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
