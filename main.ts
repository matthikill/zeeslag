input.onPinPressed(TouchPin.P0, function () {
    if (beurt == 1) {
        eigen_bord += 1
        if (eigen_bord == 2) {
            eigen_bord = 0
            basic.clearScreen()
        }
    } else if (beurt == 2) {
        eigen_bord += 2
        if (eigen_bord == 4) {
            eigen_bord = 0
            basic.clearScreen()
        }
    }
})
function schieten_p2 () {
	
}
function boten_p2 () {
    if (!(x == xboot1_p2 && y == yboot1_p2 || x == xboot2_p2 && y == yboot2_p2 || (x == xboot3_p2 && y == yboot3_p2 || (x == xboot4_p2 || y == yboot4_p2)))) {
        if (fase == 1 && boten == 0) {
            xboot1_p2 = x
            yboot1_p2 = y
            boten += 1
        } else if (fase == 1 && boten == 1) {
            xboot2_p2 = x
            yboot2_p2 = y
            boten += 1
        } else if (fase == 1 && boten == 2) {
            xboot3_p2 = x
            yboot3_p2 = y
            boten += 1
        } else if (fase == 1 && boten == 3) {
            xboot4_p2 = x
            yboot4_p2 = y
            boten += 1
        } else if (fase == 1 && boten == 4) {
            xboot5_p2 = x
            yboot5_p2 = y
            boten += 1
        } else if (fase == 1 && boten == 5) {
            beurt = 1
            fase = 2
            x = 0
            y = 0
            basic.clearScreen()
        }
    }
}
function boten_p1 () {
    if (!(x == Xboot1_p1 && y == Yboot1_p1 || x == Xboot2_p1 && y == yboot2_p1 || (x == xboot3_p1 && y == yboot3_p1 || (x == xboot4_p1 || y == yboot4_p1)))) {
        if (fase == 1 && boten == 0) {
            Xboot1_p1 = x
            Yboot1_p1 = y
            boten += 1
        } else if (fase == 1 && boten == 1) {
            Xboot2_p1 = x
            yboot2_p1 = y
            boten += 1
        } else if (fase == 1 && boten == 2) {
            xboot3_p1 = x
            yboot3_p1 = y
            boten += 1
        } else if (fase == 1 && boten == 3) {
            xboot4_p1 = x
            yboot4_p1 = y
            boten += 1
        } else if (fase == 1 && boten == 4) {
            xboot5_p1 = x
            yboot5_p1 = y
            boten += 1
        } else if (fase == 1 && boten == 5) {
            beurt = 2
            boten = 0
            x = 0
            y = 0
        }
    }
}
input.onButtonPressed(Button.A, function () {
    x += 1
    led.unplot(x - 1, y)
    if (x > 4) {
        x = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (beurt == 1 && fase == 1) {
        boten_p1()
    } else if (beurt == 2 && fase == 1) {
        boten_p2()
    } else if (beurt == 1 && fase == 2) {
        schieten_p1()
    } else if (beurt == 2 && fase == 2) {
        schieten_p2()
    }
})
input.onButtonPressed(Button.B, function () {
    y += 1
    led.unplot(x, y - 1)
    if (y > 4) {
        y = 0
    }
})
function schieten_p1 () {
    geschotenx = x
    geschoteny = y
    if ((geschotenx == xboot1_p2 && geschoteny == yboot1_p2 || geschotenx == xboot2_p2 && (geschoteny == yboot2_p2 || geschotenx == xboot3_p2)) && ((geschoteny == yboot3_p2 || geschotenx == xboot4_p2) && (geschoteny == yboot4_p2 || geschotenx == xboot5_p2 && geschoteny == yboot5_p2))) {
        xraak1_p1 = geschotenx
        yraak1_p1 = geschoteny
    } else {
        if (xmis1_p1 == 5) {
            xmis1_p1 = geschotenx
            ymis1_p1 = geschoteny
        } else if (false) {
        	
        } else {
        	
        }
    }
}
let ymis1_p1 = 0
let xmis1_p1 = 0
let yraak1_p1 = 0
let xraak1_p1 = 0
let geschoteny = 0
let geschotenx = 0
let yboot5_p2 = 0
let eigen_bord = 0
let yboot5_p1 = 0
let yboot4_p2 = 0
let yboot4_p1 = 0
let yboot3_p2 = 0
let yboot3_p1 = 0
let yboot2_p2 = 0
let yboot2_p1 = 0
let yboot1_p2 = 0
let Yboot1_p1 = 0
let xboot5_p2 = 0
let xboot5_p1 = 0
let xboot4_p2 = 0
let xboot4_p1 = 0
let xboot3_p2 = 0
let xboot3_p1 = 0
let xboot2_p2 = 0
let Xboot2_p1 = 0
let xboot1_p2 = 0
let Xboot1_p1 = 0
let boten = 0
let beurt = 0
let fase = 0
let x = 0
let y = 0
y = 0
x = 0
fase = 1
beurt = 1
boten = 0
Xboot1_p1 = 5
xboot1_p2 = 5
Xboot2_p1 = 5
xboot2_p2 = 5
xboot3_p1 = 5
xboot3_p2 = 5
xboot4_p1 = 5
xboot4_p2 = 5
xboot5_p1 = 5
xboot5_p2 = 5
Yboot1_p1 = 5
yboot1_p2 = 5
yboot2_p1 = 5
yboot2_p2 = 5
yboot3_p1 = 5
yboot3_p2 = 5
yboot4_p1 = 5
yboot4_p1 = 5
yboot4_p2 = 5
yboot5_p1 = 5
basic.forever(function () {
    if (beurt == 1 && fase == 1 || beurt == 1 && eigen_bord == 1) {
        basic.clearScreen()
        led.plot(Xboot1_p1, Yboot1_p1)
        led.plot(Xboot2_p1, yboot2_p1)
        led.plot(xboot3_p1, yboot3_p1)
        led.plot(xboot4_p1, yboot4_p1)
        led.plot(xboot5_p1, yboot5_p1)
        led.plot(x, y)
    } else if (beurt == 2 && fase == 1 || beurt == 2 && eigen_bord == 2) {
        basic.clearScreen()
        led.plot(xboot1_p2, yboot1_p2)
        led.plot(xboot2_p2, yboot2_p2)
        led.plot(xboot3_p2, yboot3_p2)
        led.plot(xboot4_p2, yboot4_p2)
        led.plot(xboot5_p2, yboot5_p2)
        led.plot(x, y)
    }
})
