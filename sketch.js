// Based on the ml5.js Pose Classification code written by Daniel Shiffman

let video;
let poseNet;
let pose;
let skeleton;

let brain;
let poseLabel = "0";

let assetWidth;
let assetHeight;
let assetRatio;

let canvasRatio;
let assetDisplayW;
let assetDisplayH;
let assetX;
let assetY;

let playing = false;
let video1 = false;
let video2 = false;
let video3 = false;
let video4 = false;
let video5 = false;
let video6 = false;
let video7 = false;
let video8 = false;
let video9 = false;
let video10 = false;
let video11 = false;
let video12 = false;
let video13 = false;
let video14 = false;
let video15 = false;
let video16 = false;

//create a variables to hold your video object (this could be streamlined as an array for a case with many videos)
let bgVideo;
let videoAsset;
let videoAsset2;
let videoAsset3;
let videoAsset4;
let videoAsset5;
let videoAsset6;
let videoAsset7;
let videoAsset8;
let videoAsset9;
let videoAsset10;
let videoAsset11;
let videoAsset12;
let videoAsset13;
let videoAsset14;
let videoAsset15;
let videoAsset16;

function preload(){
  //load video files
  bgVideo = createVideo('assets/bgvideo.mov');
  videoAsset = createVideo('assets/video1.mov');
  videoAsset2 = createVideo('assets/video2.mov');
  videoAsset3 = createVideo('assets/video3.mov');
  videoAsset4 = createVideo('assets/video4.mov');
  videoAsset5 = createVideo('assets/video5.mov');
  videoAsset6 = createVideo('assets/video6.mov');
  videoAsset7 = createVideo('assets/video7.mov');
  videoAsset8 = createVideo('assets/video8.mov');
  videoAsset9 = createVideo('assets/video9.mov');
  videoAsset10 = createVideo('assets/video10.mov');
  videoAsset11 = createVideo('assets/video11.mov');
  videoAsset12 = createVideo('assets/video12.mov');
  videoAsset13 = createVideo('assets/video13.mov');
  videoAsset14 = createVideo('assets/video14.mov');
  videoAsset15 = createVideo('assets/video15.mov');
  videoAsset16 = createVideo('assets/video16.mov');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  assetWidth = bgVideo.width;
  assetHeight = bgVideo.height;
  assetRatio = 16/9;
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  
  videoAsset.hide();
  videoAsset2.hide();
  videoAsset3.hide();
  videoAsset4.hide();
  videoAsset5.hide();
  videoAsset6.hide();
  videoAsset7.hide();
  videoAsset8.hide();
  videoAsset9.hide();
  videoAsset10.hide();
  videoAsset11.hide();
  videoAsset12.hide();
  videoAsset13.hide();
  videoAsset14.hide();
  videoAsset15.hide();
  videoAsset16.hide();
  bgVideo.hide();
  bgVideo.loop();
  bgVideo.volume(0);

  let options = {
    inputs: 34,
    outputs: 4,
    task: 'classification',
    debug: true
  }
  brain = ml5.neuralNetwork(options);
  const modelInfo = {
    model: 'model/model.json',
    metadata: 'model/model_meta.json',
    weights: 'model/model.weights.bin',
  };
  brain.load(modelInfo, brainLoaded);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if (keyCode == 32){
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function brainLoaded() {
  console.log('pose classification ready!');
  classifyPose();
}

function classifyPose() {
  if (pose) {
    let inputs = [];
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      inputs.push(x);
      inputs.push(y);
    }
    brain.classify(inputs, gotResult);
  } else {
    setTimeout(classifyPose, 100);
  }
}

function gotResult(error, results) {
  
  if (results[0].confidence > 0.75) {
    poseLabel = results[0].label;
  } else {
    poseLabel = 0;
  }
  //console.log(results[0].confidence);
  classifyPose();
}


function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  
    background(0);
  canvasRatio = width/height;
  
  if (assetRatio > canvasRatio){//letterbox on top and bottom
    assetDisplayW = width;
    assetDisplayH = width / assetRatio;
  }
  else{//letterbox on sides
    assetDisplayH = height;
    assetDisplayW = height * assetRatio;
  }
  
  //calculate the coords of top left corner
  assetX = (width-assetDisplayW)/2;
  assetY = (height-assetDisplayH)/2;
  
  //draw asset to the canvas
  rect(assetX, assetY, assetDisplayW, assetDisplayH);


  if (abs(videoAsset.duration()-videoAsset.time()) < .05){
    video1 = false; 
    videoAsset.stop();
  }
  if (abs(videoAsset2.duration()-videoAsset2.time()) < .05){
    video2 = false; 
    videoAsset2.stop();
  }
  if (abs(videoAsset3.duration()-videoAsset3.time()) < .05){
    video3 = false; 
    videoAsset3.stop();
  }
  if (abs(videoAsset4.duration()-videoAsset4.time()) < .05){
    video4 = false; 
    videoAsset4.stop();
  }
  if (abs(videoAsset5.duration()-videoAsset5.time()) < .05){
    video5 = false; 
    videoAsset5.stop();
  }
  if (abs(videoAsset6.duration()-videoAsset6.time()) < .05){
    video6 = false; 
    videoAsset6.stop();
  }
  if (abs(videoAsset7.duration()-videoAsset7.time()) < .05){
    video7 = false; 
    videoAsset7.stop();
  }
  if (abs(videoAsset8.duration()-videoAsset8.time()) < .05){
    video8 = false; 
    videoAsset8.stop();
  }
  if (abs(videoAsset9.duration()-videoAsset9.time()) < .05){
    video9 = false; 
    videoAsset9.stop();
  }
  if (abs(videoAsset10.duration()-videoAsset10.time()) < .05){
    video10 = false; 
    videoAsset10.stop();
  }
  if (abs(videoAsset11.duration()-videoAsset11.time()) < .05){
    video11 = false; 
    videoAsset11.stop();
  }
  if (abs(videoAsset12.duration()-videoAsset12.time()) < .05){
    video12 = false; 
    videoAsset12.stop();
  }
  if (abs(videoAsset13.duration()-videoAsset13.time()) < .05){
    video13 = false; 
    videoAsset13.stop();
  }
  if (abs(videoAsset14.duration()-videoAsset14.time()) < .05){
    video14 = false; 
    videoAsset14.stop();
  }
  if (abs(videoAsset15.duration()-videoAsset15.time()) < .05){
    video15 = false; 
    videoAsset15.stop();
  }
  if (abs(videoAsset16.duration()-videoAsset16.time()) < .05){
    video16 = false; 
    videoAsset16.stop();
  }
  // console.log(abs(videoAsset.duration()-videoAsset.time()));
  //check video playhead times and our playing boolean to initially pause
  if (videoAsset.time() > 0 && videoAsset2.time() > 0 && videoAsset3.time() > 0 && videoAsset4.time() > 0 && videoAsset5.time() > 0 && videoAsset6.time() > 0 && videoAsset7.time() > 0 && videoAsset8.time() > 0 && videoAsset9.time() > 0 && videoAsset10.time() > 0 && videoAsset11.time() > 0 && videoAsset12.time() > 0 && videoAsset13.time() > 0 && videoAsset14.time() > 0 && videoAsset15.time() > 0 && videoAsset16.time() > 0 && bgVideo.time() > 0 && !playing){ 
    videoAsset.pause();
    videoAsset2.pause();
    videoAsset3.pause();
    videoAsset4.pause();
    videoAsset5.pause();
    videoAsset6.pause();
    videoAsset7.pause();
    videoAsset8.pause();
    videoAsset9.pause();
    videoAsset10.pause();
    videoAsset11.pause();
    videoAsset12.pause();
    videoAsset13.pause();
    videoAsset14.pause();
    videoAsset15.pause();
    videoAsset16.pause();
    playing = true;
  }
  
  //draw video into canvas
  image(bgVideo, assetX, assetY, assetDisplayW, assetDisplayH);
  push();
  translate(assetX, assetY);
  if(video1){
    image(videoAsset, 0, 0, assetDisplayW/4, assetDisplayH/4);
    }
  if(video2){
    image(videoAsset2, assetDisplayW/4, 0, assetDisplayW/4, assetDisplayH/4);
  }
  if(video3){
    image(videoAsset3, assetDisplayW/4*2, 0, assetDisplayW/4, assetDisplayH/4);
  }
  if(video4){
    image(videoAsset4, assetDisplayW/4*3, 0, assetDisplayW/4, assetDisplayH/4);
  }
  if(video5){
    image(videoAsset5, 0, assetDisplayH/4, assetDisplayW/4, assetDisplayH/4);
    }
  if(video6){
    image(videoAsset6, assetDisplayW/4, assetDisplayH/4, assetDisplayW/4, assetDisplayH/4);
  }
  if(video7){
    image(videoAsset7, assetDisplayW/4*2, assetDisplayH/4, assetDisplayW/4, assetDisplayH/4);
  }
  if(video8){
    image(videoAsset8, assetDisplayW/4*3, assetDisplayH/4, assetDisplayW/4, assetDisplayH/4);
  }
  if(video9){
    image(videoAsset9, 0, assetDisplayH/4*2, assetDisplayW/4, assetDisplayH/4);
    }
  if(video10){
    image(videoAsset10, assetDisplayW/4, assetDisplayH/4*2, assetDisplayW/4, assetDisplayH/4);
  }
  if(video11){
    image(videoAsset11, assetDisplayW/4*2, assetDisplayH/4*2, assetDisplayW/4, assetDisplayH/4);
  }
  if(video12){
    image(videoAsset12, assetDisplayW/4*3, assetDisplayH/4*2, assetDisplayW/4, assetDisplayH/4);
  }
  if(video13){
    image(videoAsset13, 0, assetDisplayH/4*3, assetDisplayW/4, assetDisplayH/4);
    }
  if(video14){
    image(videoAsset14, assetDisplayW/4, assetDisplayH/4*3, assetDisplayW/4, assetDisplayH/4);
  }
  if(video15){
    image(videoAsset15, assetDisplayW/4*2, assetDisplayH/4*3, assetDisplayW/4, assetDisplayH/4);
  }
  if(video16){
    image(videoAsset16, assetDisplayW/4*3, assetDisplayH/4*3, assetDisplayW/4, assetDisplayH/4);
  }

//   translate(video.width, 0);
//   scale(-1, 1);
//   image(video, 200, 150, assetDisplayW/4, assetDisplayH/4);

//     if (pose) {
//     for (let i = 0; i < skeleton.length; i++) {
//       let a = skeleton[i][0];
//       let b = skeleton[i][1];
//       strokeWeight(2);
//       stroke(0);

//       line(a.position.x, a.position.y, b.position.x, b.position.y);
//     }
//     for (let i = 0; i < pose.keypoints.length; i++) {
//       let x = pose.keypoints[i].position.x;
//       let y = pose.keypoints[i].position.y;
//       fill(0);
//       stroke(255);
//       ellipse(x, y, 16, 16);
//     }
//   }
  pop();
  
  
  if (poseLabel === '1') {
    videoAsset.play();
    video1 = true;
  }
  if (poseLabel === '2') {
    videoAsset2.play();
    video2 = true;
  }
  if (poseLabel === '3') {
    videoAsset3.play();
    video3 = true;
  }
  if (poseLabel === '4') {
    videoAsset4.play();
    video4 = true;
  }
  if (poseLabel === 'q') {
    videoAsset5.play();
    video5 = true;
  }
  if (poseLabel === 'w') {
    videoAsset6.play();
    video6 = true;
  }
  if (poseLabel === 'e') {
    videoAsset7.play();
    video7 = true;
  }
  if (poseLabel === 'r') {
    videoAsset8.play();
    video8 = true;
  }
  if (poseLabel === 'a') {
    videoAsset9.play();
    video9 = true;
  }
  if (poseLabel === 's') {
    videoAsset10.play();
    video10 = true;
  }
  if (poseLabel === 'd') {
    videoAsset11.play();
    video11 = true;
  }
  if (poseLabel === 'f') {
    videoAsset12.play();
    video12 = true;
  }
  if (poseLabel === 'z') {
    videoAsset13.play();
    video13 = true;
  }
  if (poseLabel === 'x') {
    videoAsset14.play();
    video14 = true;
  }
  if (poseLabel === 'c') {
    videoAsset15.play();
    video15 = true;
  }
  if (poseLabel === 'v') {
    videoAsset16.play();
    video16 = true;
  }
}