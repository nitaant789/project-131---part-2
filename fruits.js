img ="";
status ="";
objects = [];
function preload() {
    img = loadImage('fruits.jfif');
}
function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "status : Detecting Objects";
}
function modelLoaded() {
 console.log("model is loaded");
 status = true;
 objectDetector.detect(img, gotResults); 
}
function gotResults(error, results){
if (error) {
    console.error(error);
}
else{
    console.log(results);
    objects = results;
}
}
function draw(){
    image(img,0,0, 640, 420);
    
    }
    