noseX = 0
noseY = 0
difference = 0
leftX = 0;
rightX = 0;

function preload() {}

function setup() {
    canvas = createCanvas(800, 570);
    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet Loaded!");
}

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        leftX = results[0].pose.leftWrist.x
        rightX = results[0].pose.rightWrist.x
        difference = floor(leftX - rightX)

        document.getElementById('fontSize').innerHTML = "The font size is " + difference + "px"
    }
}

function draw() {
    background('#969A97')
    textSize(difference)
    fill('#F90093')
    text('Ryan', noseX, noseY)
}