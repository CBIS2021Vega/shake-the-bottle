input.onGesture(Gesture.Shake, function () {
    if (Pop > 50) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        Pop += randint(0, 4)
        basic.showLeds(`
            . . . # .
            . . # . .
            # . . . #
            . . # . .
            . # . . #
            `)
        basic.showLeds(`
            . . # . .
            # . . . #
            . . # . .
            . # . . #
            . . . . .
            `)
    }
})
let Pop = 0
Pop = 0
