var image = new SimpleImage("duke_blue_devil.png");

for (var pixel of image.values()) {
  var red = pixel.getRed();
  var green = pixel.getGreen();
  var blue = pixel.getBlue();

  // convert to yellow by setting red and green to 255
  pixel.setRed(255);
  pixel.setGreen(255);
  pixel.setBlue(0);
}

print(image);