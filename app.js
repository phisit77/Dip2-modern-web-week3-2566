const born = 1986;
var message = "";
if (born >= 2010 && born <= 2024) {
  message = "Gen Alpha: " + "Year:" + born;
  console.log("Gen Alpha ");
} else if (born >= 1995 && born <= 2009) {
  message = "Gen Z: " + "Year:" + born;
  console.log("Gen Z ");
} else if (born >= 1980 && born <= 1994) {
  message = "Gen Y: " + "Year:" + born;
  console.log("Gen Y ");
}
document.getElementById("a").innerHTML = message;
