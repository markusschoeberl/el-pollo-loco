let storyDialog = document.getElementById("story-dialog");
let openBtnStory = document.getElementById("story-btn");
let closeBtnStory = document.getElementById("close-story-dialog");
let controlDialog = document.getElementById("controls-dialog");
let openBtnControl = document.getElementById("controls-btn");
let closeBtnControl = document.getElementById("close-controls-dialog");

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
