function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(70, 200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 100,80,300,250);

    stroke(168,10,10);
    fill(168,10,10);
    
    circle(40,40,50);
    circle(460,40,50);

    circle(40,360,50);
    circle(460,360,50);

    stroke(8, 11, 92);
    fill(8, 11, 92);
   
    rect(70,27,369,25);
    rect(65,347,375,25);

    rect(27,63,25,275);
    rect(448,63,25,275);
}

function take_snapshot(){
    save('image.png');
}
