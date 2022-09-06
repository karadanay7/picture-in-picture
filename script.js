const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to elect media stream, pass to video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error){
        // Catch Error Here
        console.log('Whopppsss, error here:', error);
    }
}

button.addEventListener('click', async () => {
//  Disable Button
button.disabled = true;
// start picture in picture
await videoElement.requestPictureInPicture();
// reset button
button.disabled = false;
});
// On Load

selectMediaStream();