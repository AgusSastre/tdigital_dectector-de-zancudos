basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 29) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.clearScreen()
    } else if (input.temperature() <= 25) {
        basic.showIcon(IconNames.Umbrella)
        basic.clearScreen()
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            . # . # .
            `)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        basic.clearScreen()
    }
})
