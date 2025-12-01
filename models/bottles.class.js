class Bottles extends DrawableObject {
  BOTTLE_IMAGES = [
    "assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  y = 440;

  constructor() {
    super();
    this.loadImage("assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.BOTTLE_IMAGES);
    this.width = 80;
    this.height = 80;
    this.x = 300 + Math.random() * 4000;
    this.animateBottle();
  }

  animateBottle() {
    setInterval(() => {
      this.playAnimation(this.BOTTLE_IMAGES);
    }, 400);
  }
}
