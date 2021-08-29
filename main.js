noseX=0;
noseY=0;


function preload() {
    clown_nose = loadImage('https://i.postimg.cc/RZz6MBfR/Icon-clown-nose.png');
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelloded);
    poseNet.on('pose',gotPoses);
}

{
    function modelloded() {
        console.log('Posenet Is Instalized');
    }
}


function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results)
    noseX = results[0].pose.noseX;
    noseY = results[0].pose.noseY;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
 image(video, 0, 0, 300, 300);
 image(clown_nose, noseX,noseY,30,30)
}

function take_snapshot(){
    save(myfilterphoto.png);
}

function modelloded() {
    console.log('poseNet Is Initialized');
}

function take_snapshot(){
    save('myFilterImage.png');
}



