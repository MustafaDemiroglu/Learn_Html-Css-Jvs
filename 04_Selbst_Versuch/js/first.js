var x {
    x= 1
} 

print(x)

var image = new SimpleImage("chapel.png");

Consider writing code that starts with the image “eastereggs.jpg” shown below on the left and replaces all the red pixel values higher than 70 with 70, resulting in the picture on the right below. 


The code has been started below but has missing code.


var image = new SimpleImage("eastereggs.jpg");

// missing code

print(image);


Which one of the following is the best choice for the correct missing code to replace all the red values higher than 70 with 70?

1 Punkt

for (var pixel of someImage.values()) {
    pixel.setRed(70);
}


for (var pixel of someImage.values()) {
    if (pixel.getRed() < 70) {
        pixel.setRed(70);
    }
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}


for (var pixel of someImage.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}


for (var pixel of someImage.values()) {
    if (pixel.getRed() < 70) {
        pixel.setRed(70);
    }
}

print(image);