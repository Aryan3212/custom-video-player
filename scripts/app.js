
const video = document.getElementById('video');
const play = document.getElementById('play');
const stopbtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Function

// Play and pause

function toggleVideoStatus(){
    if(video.paused){
        video.play();
        // setVideoProgress();
    }else{
        video.pause();
        // setVideoProgress();
        // console.log("w")
    }

}

// update play/pause icon
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class ="fa fa-play fa-2x"></i>';
    }else {
        play.innerHTML = '<i class ="fa fa-pause fa-2x"></i>';
    }
}
//  update time progress
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
    // Get mimins = nutes
    let mins = Math.floor(video.currentTime/60);
    if(mins < 10){
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10){
        secs = '0'+ String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}   

// Set video time to progress

function setVideoProgress(){
    
    video.currentTime = (+progress.value * video.duration)/100;
    // The + before progress.value converts it to a number therefore the function is realtime
}


function stopVideo(){
    video.currentTime = 0;
    video.pause();
}
// Event Listeners

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress );

play.addEventListener('click', toggleVideoStatus);

stopbtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);