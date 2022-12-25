p5.disableFriendlyErrors = !0;
let hash = tokenData.hash, petalos = [], t, s, wh, ww, seed, petaloSt, pHS, numP, an, cIndex, cIndexN, cnv, nS, nV, nSt,
    lS, x, y, nSeed, ratio = 4 / 3, defaultSize = 710, sz, cIndexR = [], stringColor, style, surface, bg, shColV,
    shOffX, shOffY, shape, shStV, wind, pS, pDS, pollen, cVal, angles = [],
    uW = [1, 8, 13, 14, 19, 20, 21, 65, 66, 78, 86, 93, 97, 98, 99, 144, 152, 230, 276, 367, 439, 474, 577, 590, 708, 714, 759, 786, 838, 845, 917, 988, 989, 1014, 1041, 1042, 1062, 1073, 1099, 1119, 1120, 1121, 1165, 1171, 1184, 1185],
    wU = [44, 232, 296, 506, 566, 587, 632, 697, 762, 1098, 1110];
const cPal = [["#667854", "#818F64", "#C9D696", "#F0F0E4", "#615252"], ["#F7F9FA", "#DFE2E6", "#AEB5BD", "#495057", "#121212"], ["#FEFAB6", "#A5F5AE", "#66B5AA", "#5B7C8C", "#CA9FD4"], ["#001449", "#012677", "#005BC4", "#00B3FB", "#17F8FE"], ["#A89AB8", "#9888A6", "#786573", "#435451", "#294D4A"], ["#F4FAB4", "#EFC6B2", "#A4b4CD", "#7EA4E5", "#38679C"], ["#122A2B", "#26404D", "#264B4D", "#276E70", "#1B9D8C"], ["#FA9364", "#FAA46B", "#F5B17D", "#FFC978", "#FCDE90"], ["#4C286E", "#6F4AB3", "#7C7AC4", "#7AA0BD", "#A5D7E0"], ["#4B276E", "#582F81", "#662C89", "#8C4FC3", "#05F4A4"], ["#4888C6", "#D9669B", "#BF3F3F", "#D93D04", "#C97016"], ["#00010D", "#2168A6", "#337AA6", "#56A1BF", "#F2EBDF"], ["#A64962", "#BF8DF2", "#A56DF2", "#F2B885", "#1C6E87"], ["#419FD9", "#73B2D9", "#D96A6A", "#D98989", "#F2F2F2"], ["#F2EBF0", "#5C4C73", "#1A7339", "#268C4A", "#6DA681"], ["#536F90", "#66AC9A", "#558F9D", "#444F8E", "#659992"], ["#4C1517", "#343063", "#504B79", "#B4AEB8", "#5F5B85"], ["#2E62A6", "#4A9D6F", "#E0EDE4", "#DFB9C6", "#EDE3E1"], ["#72A6A6", "#F2E1AC", "#FEFDCF", "#F28888", "#F29991"], ["#0D138C", "#5357A6", "#0F228C", "#F2E4C9", "#F2F2F2"], ["#BF343F", "#32628C", "#2DA690", "#F2B84B", "#F2EBDF"]];

function setup() {
    windowHeight >= windowWidth * ratio ? (ww = windowWidth, wh = windowWidth * ratio) : (wh = windowHeight, ww = windowHeight / ratio), cnv = createCanvas(ww, wh), document.body.style.backgroundColor = "#111", sz = width / defaultSize, sP(), sS(), sT(), sSh(), sC(), noiseSeed(seed);
    for (let e = 0; e < numP; e++) x = rR(0 - 100 * sz, width + 100 * sz), y = rR(0 - 100 * sz, height + 100 * sz), petalos.push(new Petalo(x, y, nS * sz, nSt, lS));
    noLoop()

}

function draw() {
    background(bg);
    for (var e of petalos) e.display()
}

S = Uint32Array.from([0, 1, s = t = 2, 3].map(e => parseInt(tokenData.hash.substr(8 * e + 2, 8), 16))), R = e => (t = S[3], S[3] = S[2], S[2] = S[1], S[1] = s = S[0], t ^= t << 11, S[0] ^= t ^ t >>> 8 ^ s >>> 19, S[0] / 2 ** 32);

class Petalo {
    constructor(e, s, t, n, h) {
        this.x = e, this.y = s, this.scale = t, this.strength = n, this.len = h, this.speed = 5
    }

    update() {
        for (an = noise(this.x / this.scale, this.y / this.scale) * this.strength; an > TWO_PI;) an -= 6.28;
        "3" != surface && "4" != surface || an > PI && (an = -an), this.x += cos(an) * sz * this.speed, this.y += sin(an) * sz * this.speed, curveVertex(this.x, this.y)
    }

    display() {
        var e, s;
        "Angle" == cVal ? (an = noise(this.x / this.scale, this.y / this.scale) * this.strength, e = Math.round(an % cIndex.length), e = constrain(e, 0, cIndex.length - 1), this.col = cIndex[e]) : "Random" == cVal ? this.col = cIndex[int(rR(0, cIndex.length))] : "Grid" == cVal && (s = Math.round(this.y / (height / cIndex.length + +sz)) % cIndex.length, s = constrain(s, 0, cIndex.length - 1), this.col = cIndex[s]), "Magic" == style && (s = Math.round(this.y / (height / cIndexR.length + +sz) % cIndexR.length), s = constrain(s, 0, cIndexR.length - 1), this.colstr = cIndexR[s]);
        let t, n;
        beginShape();
        for (let e = 0; e < this.len; e++) t = this.y / (4 * sz), n = "1" == surface ? this.y / (7 * sz) : "2" == surface ? this.y / (5 * sz) : "3" == surface ? this.y / (6 * sz) : "4" == surface ? this.y / (4.5 * sz) : "10" == surface ? this.y / (6 * sz) : n, strokeWeight(+sz), "Anime" == style ? (strokeWeight(1.5 * sz), stroke(0, .35 * n)) : "Clean" == style ? noStroke() : "Magic" == style ? (strokeWeight(1.25 * sz), stroke(this.colstr)) : "Veins" == style ? "Black" == shColV ? "Black" == petaloSt ? (strokeWeight(1.5 * sz), stroke(0, t)) : (strokeWeight(1.5 * sz), stroke(255, t)) : stroke(0, t) : stroke(0), "Hard" == wind && ("Clean" == style ? drawPollen(this.x, this.y, 50, sz, pHS) : "Shady" == style || "Veins" == style ? drawPollen(this.x, this.y, 800, sz, pHS) : "Magic" == style ? drawPollen(this.x, this.y, 50, sz, pHS / 2) : (stroke(85, 10, 135, .35 * n), fill(85, 10, 135, n), surface, drawPollen(this.x, this.y, 750, sz, pHS * rR(.65, .75)))), "Anime" == style ? fill(255, n) : fill(this.col), this.update();
        "Anime" != style && ("Shady" != style || "Open" == shape) ? endShape() : endShape(CLOSE), "Light" == wind ? "Clean" == style ? (noStroke(), ellipse(rR(0, width), rR(0, height), rR(3 * sz, 7 * sz))) : "Shady" == style ? ("Stroke Black" == pollen ? stroke(0) : "Stroke White" == pollen ? stroke(255) : noStroke(), ellipse(rR(0, width), rR(0, height), pS * sz)) : "Veins" == style ? ellipse(rR(0, width), rR(0, height), pS * sz) : "Magic" == style ? (strokeWeight(+sz), stroke(this.col), fill(this.colstr), ellipse(this.x, this.y, pS * sz)) : (stroke(85, 10, 135, .35 * t), fill(85, 10, 135, t), ellipse(rR(0, width), rR(0, height), pDS * sz * rR(.75, 1))) : "No" == wind && (noStroke(), noFill(), ellipse(rR(0, width), rR(0, height), 0, 0))
    }
}

function sP() {
    seed = Math.round(rR(0, 1120)), style = wR({Shady: .321, Clean: .122, Anime: .01, Magic: .362, Veins: .185});
    var e = uW.includes(seed);
    surface = wR(e ? {1: .1, 2: .26, 5: .105, 6: .025, 7: .15, 8: .1, 10: .26} : {
        1: .05,
        2: .21,
        3: .1,
        4: .1,
        5: .055,
        6: .025,
        7: .15,
        8: .1,
        10: .21
    });
    e = wU.includes(seed);
    bg = e ? (style = wR({Shady: .05, Clean: .3, Magic: .35, Veins: .3}), surface = "4", wR({
        "#000000": .05,
        "#F5F2E4": .8,
        "#00061F": .05,
        "#0F011A": .05,
        "#031A18": .05
    })) : wR({
        "#000000": .45,
        "#F5F2E4": .05,
        "#00061F": .15,
        "#0F011A": .15,
        "#031A18": .2
    }), "Shady" == style && (bg = wR({
        "#000000": .45,
        "#00061F": .15,
        "#0F011A": .15,
        "#031A18": .25
    })), shape = wR({Close: .7, Open: .3}), wind = wR({Hard: .3, Light: .65, No: .05}), pollen = wR({
        "Stroke Black": .4,
        "Stroke White": .4,
        "No Stroke": .2
    })
}

function sS() {
    "Clean" == style ? pollen = "No Stroke" : "Magic" == style ? (shape = "OPEN", pollen = "No Stroke") : "Veins" == style ? (shape = "Open", pollen = "No Stroke", petaloSt = wR({
        White: .3,
        Black: .7
    })) : "Anime" == style && (bg = "#000000", surface = wR({
        1: .1,
        2: .25,
        3: .2,
        4: .2,
        10: .25
    }), pollen = "No Stroke")
}

function sT() {
    "1" == surface ? (numP = Math.round(rR(7500, 9e3)), types(80, 80, 15, 15, 11, 12, 4, 2, 2.5)) : "7" == surface ? (numP = Math.round(rR(6e3, 7e3)), types(500, 800, 7, 8, 10, 11, 4, 2, 2)) : "8" == surface ? (numP = Math.round(rR(6e3, 7e3)), types(200, 250, 10, 15, 10, 11, 4, 2, 2)) : "2" == surface ? (numP = "Anime" == style ? Math.round(rR(1200, 1500)) : Math.round(rR(3e3, 4e3)), types(300, 300, 15, 20, 15, 15, 4, 3, 3.5)) : "10" == surface ? (numP = "Anime" == style ? Math.round(rR(1200, 1500)) : Math.round(rR(3e3, 4e3)), types(300, 300, 20, 30, 20, 25, 4, 3, 3.5)) : "3" == surface ? (numP = Math.round(rR(500, 600)), types(1300, 1300, 33, 33, 35, 35, 4, 4, 3.5)) : "4" == surface ? (numP = Math.round(rR(500, 600)), types(2e3, 2e3, 50, 50, 40, 40, 6, 4, 2)) : "5" == surface ? (numP = Math.round(rR(1400, 2e3)), types(70, 70, 20, 20, 22, 27, 2, 6, 4)) : "6" == surface && (numP = rR(1500, 2500), types(290, 290, 20, 20, 25, 27, 4, 6, 4)), "Stroke White" == pollen && (pS *= .5)
}

function sC() {
    var e = wR({
        0: .05,
        1: .05,
        2: .05,
        3: .05,
        4: .05,
        5: .045,
        6: .05,
        7: .05,
        8: .05,
        9: .045,
        10: .05,
        11: .05,
        12: .04,
        13: .04,
        14: .05,
        15: .05,
        16: .04,
        17: .05,
        18: .05,
        19: .04,
        20: .05
    });
    cIndex = cPal[e], cIndexR = cPal[e], cIndexR = cIndex.concat(cIndex), cIndexR.splice(0, 1), cIndexR.splice(5, 4), cIndexN = cPal.indexOf(cIndex), cVal = "1" == surface || "5" == surface ? wR({
        Random: .25,
        Angle: .75
    }) : "6" == surface ? wR({Random: .8, Grid: .2}) : wR({Random: .3, Angle: .6, Grid: .1})
}

function sSh() {
    "Shady" == style ? (shColV = "Black", shStV = wR({
        6: .05,
        8: .15,
        10: .15,
        25: .3,
        70: .3,
        100: .05
    }), shOffX = wR({1: .15, 2: .15, 3: .2, "-1": .15, "-2": .15, "-3": .2}), shOffY = wR({
        1: .15,
        2: .15,
        3: .2,
        "-1": .15,
        "-2": .15,
        "-3": .2
    })) : "Veins" == style ? (shColV = wR({
        Black: .5,
        White: .5
    }), shStV = "Black" == shColV ? (shOffX = 0, shOffY = 0) : (shOffX = 1, shOffY = 1)) : "Anime" == style ? (shColV = "White", shOffX = 0, shOffY = 0, shStV = (wind, 12)) : (shColV = "Black", shStV = 0, shOffX = 0, shOffY = 0), style, 1 <= sz ? (drawingContext.shadowColor = shColV, drawingContext.shadowBlur = shStV * sz, drawingContext.shadowOffsetX = shOffX * sz, drawingContext.shadowOffsetY = shOffY * sz) : (drawingContext.shadowColor = shColV, drawingContext.shadowBlur = shStV, drawingContext.shadowOffsetX = shOffX, drawingContext.shadowOffsetY = shOffY)
}

function rR(e, s) {
    return R() * (s - e) + e
}

function wR(e) {
    let s, t = 0, n = R();
    for (s in e) if (t += e[s], n <= t) return s
}

function types(e, s, t, n, h, i, l, o, a) {
    nS = Math.round(rR(e, s)), nV = Math.round(rR(t, n)), nSt = nS / nV, lS = Math.round(rR(h, i)), pS = l, pDS = o, pHS = a
}

function drawPollen(e, s, t, n, h) {
    ellipse(rR(e - t * n, e + t * n), rR(s - t, s + t), h * n)
}
