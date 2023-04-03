function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

let text = "We are the so-called \"Vikings\" from the north.";
document.getElementById("demo2").innerHTML = text;

function myFunction() {
    let text = document.getElementById("demo3").innerHTML;
    document.getElementById("demo3").innerHTML =
    text.replace("Microsoft","W3Schools");
}

const points = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo4").innerHTML = points;  
    function myFunction2() {
    points.sort();
    document.getElementById("demo4").innerHTML = points;
    }
    function myFunction3() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demo4").innerHTML = points;
}

const points1 = [40, 100, 1, 5, 25, 10];
    document.getElementById("demo5").innerHTML = points1;  
    function myFunction4() {
    for (let i = points1.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = points1[i];
        points1[i] = points1[j];
        points1[j] = k;
    }
    document.getElementById("demo5").innerHTML = points1;
    }

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
     ];
    
    displayCars();
    function myFunction5() {
    cars.sort(function(a, b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
        });
    displayCars();
    }
    function displayCars() {
    document.getElementById("demo6").innerHTML =
    cars[0].type + " " + cars[0].year + "<br>" +
    cars[1].type + " " + cars[1].year + "<br>" +
    cars[2].type + " " + cars[2].year;
    }