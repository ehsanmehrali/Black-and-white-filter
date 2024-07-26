var originalimage;
var grayscaleimage;
var imagecanvas1 = document.getElementById("can1");
var imagecanvas2 = document.getElementById("can2");
function upload() {
  var fileinput = document.getElementById("finput");
  originalimage = new SimpleImage(fileinput);
  grayscaleimage = new SimpleImage(fileinput);
  originalimage.drawTo(imagecanvas1);
}

function makegray() {
  for (var pixel of grayscaleimage.values()) {
    var avrg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avrg);
    pixel.setGreen(avrg);
    pixel.setBlue(avrg);
  }
  grayscaleimage.drawTo(imagecanvas2);
}
