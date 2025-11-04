class BackgroundObject extends MovableObject {
  width = 864;
  height = 576;
  constructor(imagePath, x) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = 576 - this.height;
  }
}
