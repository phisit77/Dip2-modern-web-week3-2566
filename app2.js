const born = 2010;
var message = "";
switch (born) {
  case 2010:
    message = "Gen Alpha: " + "Year:" + born;
    console.log("Gen Alpha ");
    break;
  case 1995:
    message = "Gen Z: " + "Year:" + born;
    console.log("Gen Alpha ");
    break;
  default:
    message = "Gen ERROR: " + "Year:" + born;
    break;
}
document.getElementById("a").innerHTML = message;
