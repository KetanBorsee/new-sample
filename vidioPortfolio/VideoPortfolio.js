document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('mainVideo');
    const videoItems = document.querySelectorAll('.video-item');

    // Add event listeners to dynamically load videos on click
    videoItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            videoItems.forEach(video => video.classList.remove('active'));

            // Add active class to the clicked item
            item.classList.add('active');

            // Get the video source and title from the clicked item
            const videoSrc = item.getAttribute('data-video');
            const videoTitle = item.getAttribute('data-title');
            const title = document.getElementById('videoTitle');

            // Update the main video source and title
            mainVideo.querySelector('source').src = videoSrc;
            title.textContent = videoTitle;

            // Reload and play the selected video
            mainVideo.load();
            mainVideo.play();
        });
    });
});
