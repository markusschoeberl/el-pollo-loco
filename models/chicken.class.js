class Chicken extends MovableObject {
  width = 100;
  height = 100;

  y = 420;

  isDead = false;

  IMAGES_WALKING = [
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  DYING_BIG_CHICKEN = [
    "assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  constructor() {
    super();
    this.loadImage(
      "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.IMAGES_WALKING);
    this.x = 400 + Math.random() * 1000;
    this.speed = 0.15 + Math.random() * 0.5;
    this.animate();
  }

  animate() {
    if (!this.isDead) {
      setInterval(() => {
        this.moveLeft();
      }, 1000 / 60);
    }
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }

  die() {
    if (this.isDead) return;
    this.isDead = true;
    this.playAnimation(this.DYING_BIG_CHICKEN);
    setTimeout(() => {
      this.visible = false;
    }, 1000);
  }
}
