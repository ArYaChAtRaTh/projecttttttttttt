function preload() {

}


function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_colour = "";


}

function draw() {
    image(video, 150, 135, 300, 200);
    tint(tint_colour);
    stroke("red");
    circle(45,45,80);
    circle(45,420,80);
    circle(590,420,80);
    circle(590,45,80);
    rect(40,50,20,350);
    rect(590,50,20,350);
    rect(40,30,540,20);
    rect(40,420,540,20);
    

}

function take_snapshot() {
    save('your_image.png');
}

function filter_tint() {
    tint_colour = document.getElementById("colour_name").value;
}