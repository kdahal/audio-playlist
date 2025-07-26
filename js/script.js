(function () {
    // Playlist array - replace with your MP3 file names
    var files = [
        "songs/song1.mp3",
        "songs/song2.mp3",
        "songs/song3.mp3"
        // Add more files here, e.g., "song4.mp3"
    ];

    // Current index of the files array
    var currentIndex = 0;

    // Get the audio element
    var musicPlayer = document.querySelector("#music_list audio");

    // Function to play the next audio file
    function playNext() {
        // Check for last audio file in the playlist
        if (currentIndex === files.length - 1) {
            currentIndex = 0; // Loop back to the first
        } else {
            currentIndex++;
        }

        // Change the audio element source and play
        musicPlayer.src = files[currentIndex];
        musicPlayer.play(); // Ensure it starts playing
    }

    // Error handling if audio element not found
    if (musicPlayer === null) {
        console.error("Audio player does not exist.");
        return;
    }

    // Set initial source and add event listener for auto-next
    musicPlayer.src = files[currentIndex];
    musicPlayer.addEventListener('ended', playNext); // Auto-play next on end

    // Optional: Handle pause/play if needed (browser controls handle this by default)
})();