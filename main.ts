let numberString = ""
let a = ""
let b = ""
let operator = ""
/**
 * Connect a 4x4 matrix keypad like this:
 * 
 * Rows:
 * 
 * keypad / micro:bit pin
 * 
 * 1.          0
 * 
 * 2.          1
 * 
 * 3.          2
 * 
 * 4           8
 * 
 * Columns
 * 
 * 5.         13
 * 
 * 6.         14
 * 
 * 7.         15
 * 
 * 8.         16
 * 
 * Keys:
 * 
 * A = x
 * 
 * B = /
 * 
 * C = -
 * 
 * D = +
 * 
 * * = .
 * 
 * # = =
 */
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        numberString = "" + numberString + "0"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        if (a == "") {
            a = numberString
            numberString = ""
        } else if (b == "") {
            b = numberString
            numberString = ""
        }
        basic.showString("=")
        basic.pause(50)
        if (a == "" || b == "") {
            basic.showString("e")
        } else if (operator == "+") {
            basic.showNumber(parseFloat(a) + parseFloat(b))
        } else if (operator == "-") {
            basic.showNumber(parseFloat(a) - parseFloat(b))
        } else if (operator == "x") {
            basic.showNumber(parseFloat(a) * parseFloat(b))
        } else if (operator == "/") {
            basic.showNumber(parseFloat(a) / parseFloat(b))
        }
        numberString = ""
        a = ""
        b = ""
        operator = ""
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        operator = "+"
        basic.showString("+")
    } else {
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showString("7")
        numberString = "" + numberString + "7"
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        basic.showString("8")
        numberString = "" + numberString + "8"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        basic.showString("9")
        numberString = "" + numberString + "9"
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        if (a == "") {
            a = numberString
            numberString = ""
        } else if (b == "") {
            b = numberString
            numberString = ""
        }
        operator = "-"
        basic.showString("-")
    } else {
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        operator = "/"
        basic.showString("/")
    } else {
        basic.clearScreen()
    }
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P0, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        operator = "x"
        basic.showString("x")
    } else {
        basic.clearScreen()
    }
})
