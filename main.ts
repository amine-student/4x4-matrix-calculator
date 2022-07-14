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
let resulr = 0
let operator = ""
let b = ""
let a = ""
let numberString = ""
I2C_LCD1602.on()
I2C_LCD1602.LcdInit(0)
I2C_LCD1602.clear()
I2C_LCD1602.ShowString("entrer num 1", 0, 0)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
    	
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        I2C_LCD1602.clear()
        numberString = "" + numberString + "0"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        if (a == "") {
            a = numberString
            numberString = ""
            I2C_LCD1602.clear()
        } else if (b == "") {
            b = numberString
            numberString = ""
            I2C_LCD1602.clear()
        }
        basic.showString("=")
        I2C_LCD1602.ShowString("=", 0, 0)
        basic.pause(1000)
        if (a == "" || b == "") {
            basic.showString("e")
            I2C_LCD1602.ShowString("entrer un numero", 0, 0)
        } else if (operator == "+") {
            basic.showNumber(parseFloat(a) + parseFloat(b))
            resulr = parseFloat(a) + parseFloat(b)
            I2C_LCD1602.ShowNumber(resulr, 0, 0)
            basic.pause(100)
        } else if (operator == "-") {
            resulr = parseFloat(a) - parseFloat(b)
            I2C_LCD1602.ShowNumber(resulr, 0, 0)
            basic.pause(2000)
            I2C_LCD1602.ShowString("entrer num 1", 0, 0)
            basic.showNumber(parseFloat(a) - parseFloat(b))
        } else if (operator == "x") {
            basic.showNumber(parseFloat(a) * parseFloat(b))
            resulr = parseFloat(a) * parseFloat(b)
            I2C_LCD1602.ShowNumber(resulr, 0, 0)
        } else if (operator == "/") {
            basic.showNumber(parseFloat(a) / parseFloat(b))
            resulr = parseFloat(a) / parseFloat(b)
            I2C_LCD1602.ShowNumber(resulr, 0, 0)
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
        I2C_LCD1602.clear()
        basic.showString("7")
        I2C_LCD1602.ShowString("" + numberString + "7", 0, 0)
        numberString = "" + numberString + "7"
        basic.pause(1000)
    } else if (pins.digitalReadPin(DigitalPin.P14) == 1) {
        I2C_LCD1602.clear()
        basic.showString("8")
        I2C_LCD1602.ShowString("" + numberString + "8", 0, 0)
        numberString = "" + numberString + "8"
    } else if (pins.digitalReadPin(DigitalPin.P15) == 1) {
        I2C_LCD1602.clear()
        basic.showString("9")
        I2C_LCD1602.ShowString("" + numberString + "9", 0, 0)
        basic.pause(100)
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
        I2C_LCD1602.clear()
        basic.showString("-")
        I2C_LCD1602.ShowString("-", 0, 0)
        I2C_LCD1602.ShowString("ENTER NUM2", 0, 1)
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
