function generateLink() {
    let youtubeLink = document.getElementById("youtubeLink").value.trim();
    let minutesInput = document.getElementById("minutesInput").value.trim();
    let secondsInput = document.getElementById("secondsInput").value.trim();

    if (youtubeLink === "") {
        alert("Please enter a valid YouTube link.");
        return;
    }

    if (!isValidYoutubeLink(youtubeLink)) {
        alert("Please enter a valid YouTube link.");
        return;
    }

    if (!isValidTimeInput(minutesInput, secondsInput)) {
        alert("Please enter valid time inputs.");
        return;
    }

    let totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);
    let modifiedLink = youtubeLink + "&t=" + totalSeconds + "s";

    document.getElementById("output").innerHTML = `<p>Modified Link: <a href="${modifiedLink}" target="_blank">${modifiedLink}</a></p>`;
    document.getElementById("copyLink").value = modifiedLink; // Set value for copy functionality
}

function isValidYoutubeLink(link) {
    let youtubeRegExp = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    return youtubeRegExp.test(link);
}

function isValidTimeInput(minutes, seconds) {
    if (isNaN(parseInt(minutes)) || isNaN(parseInt(seconds))) {
        return false;
    }

    return parseInt(minutes) >= 0 && parseInt(seconds) >= 0;
}

function copyToClipboard() {
    let copyText = document.getElementById("output").getElementsByTagName("a")[0];
    let tempInput = document.createElement("input");
    tempInput.value = copyText.href;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Copied the link: " + copyText.href);
}
