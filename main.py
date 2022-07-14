numberString = ""
a = ""
b = ""
operator = ""
"""

Connect a 4x4 matrix keypad like this:

Rows:

keypad / micro:bit pin

1.          0

2.          1

3.          2

4           8

Columns

5.         13

6.         14

7.         15

8.         16

Keys:

A = x

B = /

C = -

D = +

* = .

# = =

"""

def on_forever():
    global numberString, a, b, operator
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P8, 1)
    if pins.digital_read_pin(DigitalPin.P13) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        numberString = "" + numberString + "0"
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        if a == "":
            a = numberString
            numberString = ""
        elif b == "":
            b = numberString
            numberString = ""
        basic.show_string("=")
        basic.pause(50)
        if a == "" or b == "":
            basic.show_string("e")
        elif operator == "+":
            basic.show_number(parse_float(a) + parse_float(b))
        elif operator == "-":
            basic.show_number(parse_float(a) - parse_float(b))
        elif operator == "x":
            basic.show_number(parse_float(a) * parse_float(b))
        elif operator == "/":
            basic.show_number(parse_float(a) / parse_float(b))
        numberString = ""
        a = ""
        b = ""
        operator = ""
    elif pins.digital_read_pin(DigitalPin.P16) == 1:
        operator = "+"
        basic.show_string("+")
    else:
        basic.clear_screen()
    pins.digital_write_pin(DigitalPin.P8, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)
    if pins.digital_read_pin(DigitalPin.P13) == 1:
        basic.show_string("7")
        numberString = "" + numberString + "7"
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        basic.show_string("8")
        numberString = "" + numberString + "8"
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        basic.show_string("9")
        numberString = "" + numberString + "9"
    elif pins.digital_read_pin(DigitalPin.P16) == 1:
        if a == "":
            a = numberString
            numberString = ""
        elif b == "":
            b = numberString
            numberString = ""
        operator = "-"
        basic.show_string("-")
    else:
        basic.clear_screen()
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
    if pins.digital_read_pin(DigitalPin.P13) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P16) == 1:
        operator = "/"
        basic.show_string("/")
    else:
        basic.clear_screen()
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P0, 1)
    if pins.digital_read_pin(DigitalPin.P13) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P14) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P15) == 1:
        pass
    elif pins.digital_read_pin(DigitalPin.P16) == 1:
        operator = "x"
        basic.show_string("x")
    else:
        basic.clear_screen()
basic.forever(on_forever)
