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
