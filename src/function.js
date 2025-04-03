function generateMusic() {
    const description = document.getElementById("songDescription").value.trim().toLowerCase();
    
    if (description === "") {
        document.getElementById("status").innerText = "Please enter a description for the song.";
        return;
    }

    document.getElementById("status").innerText = "Generating music... Please wait.";

    const songURLs = {
        pop: "https://files.catbox.moe/dx9e7i.mp3",
        rock: "https://files.catbox.moe/vjfk5a.mp3",
        metal: "https://files.catbox.moe/mqbgo8.mp3",
        poprock: "https://files.catbox.moe/h5rvzx.mp3",
        jazz: "https://files.catbox.moe/l79wuh.mp3",
        classical: "https://files.catbox.moe/52imba.mp3",
        country: "https://files.catbox.moe/jzxm8f.mp3"
    };

    let selectedGenre = "pop"; // Default genre

    if (description.includes("metal")) {
        selectedGenre = "metal";
    } else if (description.includes("pop rock") || description.includes("poprock")) {
        selectedGenre = "poprock";
    } else if (description.includes("rock")) {
        selectedGenre = "rock";
    } else if (description.includes("jazz")) {
        selectedGenre = "jazz";
    } else if (description.includes("classical")) {
        selectedGenre = "classical";
    } else if (description.includes("country")) {
        selectedGenre = "country";
    }

    setTimeout(() => {
        const songURL = songURLs[selectedGenre];

        document.getElementById("musicSource").src = songURL;
        document.getElementById("musicPlayer").load();
        document.getElementById("musicPlayer").classList.remove("hidden");
        document.getElementById("musicPlayer").play();

        document.getElementById("downloadLink").href = songURL;
        document.getElementById("downloadLink").classList.remove("hidden");
        document.getElementById("downloadLink").innerText = "Download Song";

        document.getElementById("status").innerText = `Music generated successfully! Genre: ${selectedGenre}`;
    }, 2000);
}
