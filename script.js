document.addEventListener("DOMContentLoaded", function () {
    // Get the main video element
    let mainVideo = document.getElementById("first-video-link");

    // Get all small videos in the bottom row
    let smallVideos = document.querySelectorAll(".video-fluid");

    // Loop through each small video and add a click event
    smallVideos.forEach((video) => {
        video.addEventListener("click", function () {
            // Change the main video src to the clicked video src
            mainVideo.src = this.src;
            mainVideo.play(); // Play the new video
        });
    });
});
