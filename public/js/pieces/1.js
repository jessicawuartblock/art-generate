
const hashPairs = [];
for (let j = 0; j < 32; j++) {
  hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}
console.log(hashPairs);
// Parse the hash pairs into ints. Hash pairs are base 16 so "ec" becomes 236.
// Each pair will become a value ranging from 0 - 255
const decPairs = hashPairs.map(x => {
  return parseInt(x, 16);
});

// Grab the first 16 values of the hash to use as a noise seed.
const seed = parseInt(tokenData.hash.slice(0, 16), 16);

// Grab the first hash pair int to use as a line thickness value.
const lineThickness = decPairs[1];

// Grab three different different hash pair ints to use as RGB values.
const rColor = decPairs[28];
const gColor = decPairs[29];
const bColor = decPairs[30];

s = 200;

function setup() {

  noiseSeed(seed);
  quantity = Math.floor(noise(1) * 10);
  let totalHeight = Math.round(quantity / 5) * 200;
  createCanvas(1000, totalHeight > 1000 ? totalHeight : 1000);
  background(rColor, gColor, bColor);
  let index = 0;
  for (x = 0; x < width; x += s) {
    for (y = 0; y < height; y += s) {
      if (index >= quantity) {
        break;
      }
      fill(206, 45, 31);
      heart(x+s/2, y+s/2, s/2);
      index++;
    }
  }
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
