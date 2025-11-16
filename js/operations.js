let storyDialog = document.getElementById("story-dialog");
let openBtnStory = document.getElementById("story-btn");
let closeBtnStory = document.getElementById("close-story-dialog");
let controlDialog = document.getElementById("controls-dialog");
let openBtnControl = document.getElementById("controls-btn");
let closeBtnControl = document.getElementById("close-controls-dialog");
let fullscreenBtn = document.getElementById("fullscreen-btn");
let enterIcon = document.getElementById("enter-icon");
let exitIcon = document.getElementById("exit-icon");
let canvasScreen = document.getElementById("canvas");
let muteButton = document.getElementById("sound-control");
let muteIcon = document.getElementById("muteIcon");
let allSounds = new Set();

function registerSound(audio) {
  allSounds.add(audio);
  return audio;
}

function getMuteState() {
  return localStorage.getItem("soundMuted") === "true";
}

function toggleMute() {
  let currentlyMuted = getMuteState();
  setMute(!currentlyMuted);
}

function setMute(muted) {
  allSounds.forEach((sound) => {
    sound.muted = muted;
  });
  muteButton.setAttribute("aria-pressed", muted);
  if (muted) {
    muteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M792-56 671-177q-25 16-53 27.5T560-131v-82q14-5 27.5-10t25.5-12L480-368v208L280-360H120v-240h128L56-792l56-56 736 736-56 56Zm-8-232-58-58q17-31 25.5-65t8.5-70q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 53-14.5 102T784-288ZM650-422l-90-90v-130q47 22 73.5 66t26.5 96q0 15-2.5 29.5T650-422ZM480-592 376-696l104-104v208Zm-80 238v-94l-72-72H200v80h114l86 86Zm-36-130Z"/></svg>`;
    localStorage.setItem("soundMuted", "true");
  } else {
    muteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M560-131v-82q90-26 145-100t55-168q0-94-55-168T560-749v-82q124 28 202 125.5T840-481q0 127-78 224.5T560-131ZM120-360v-240h160l200-200v640L280-360H120Zm440 40v-322q47 22 73.5 66t26.5 96q0 51-26.5 94.5T560-320ZM400-606l-86 86H200v80h114l86 86v-252ZM300-480Z"/></svg>`;
    localStorage.setItem("soundMuted", "false");
  }
}

muteButton.addEventListener("click", toggleMute);

document.addEventListener("DOMContentLoaded", function () {
  setMute(getMuteState());
});

openBtnStory.addEventListener("click", () => {
  storyDialog.showModal();
});

openBtnControl.addEventListener("click", () => {
  controlDialog.showModal();
});

closeBtnStory.addEventListener("click", () => {
  storyDialog.close();
});

closeBtnControl.addEventListener("click", () => {
  controlDialog.close();
});

storyDialog.addEventListener("click", (e) => {
  const rect = storyDialog.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;
  if (!inside) {
    storyDialog.close();
  }
});

controlDialog.addEventListener("click", (e) => {
  const rect = controlDialog.getBoundingClientRect();
  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;
  if (!inside) {
    controlDialog.close();
  }
});

function updateFullscreenIcon() {
  if (document.fullscreenElement) {
    enterIcon.style.display = "none";
    exitIcon.style.display = "inline";
  } else {
    enterIcon.style.display = "inline";
    exitIcon.style.display = "none";
  }
}

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    canvasScreen.requestFullscreen().catch((err) => {
      console.error("Fullscreen error:", err);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener("fullscreenchange", updateFullscreenIcon);
updateFullscreenIcon();
