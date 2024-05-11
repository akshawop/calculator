// meme section
const video = document.querySelector("video");
function playMeme()
{
    video.style.display = "block";
    video.play();
    video.onended = () => {video.style.display = "none";};
}
