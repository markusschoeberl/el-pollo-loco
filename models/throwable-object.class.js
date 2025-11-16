class ThrowableObject extends MovableObject {
  BOTTLE_ROTATION = [
    "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  BOTTLE_SPLASH = [
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  isSplashed = false;
  groundY = 500;

  throw_sound = registerSound(new Audio("audio/pepe/throw.wav"));
  splash_sound = registerSound(new Audio("audio/items/bottle-thrown.mp3"));

  constructor(x, y, enemies) {
    super().loadImage("assets/img/6_salsa_bottle/salsa_bottle.png");
    this.loadImages(this.BOTTLE_ROTATION);
    this.loadImages(this.BOTTLE_SPLASH);
    this.x = x;
    this.y = y;
    this.enemies = enemies;
    this.height = 60;
    this.width = 50;
    this.throw();
  }

  throw() {
    this.throw_sound.play();
    this.speedY = 30;
    this.applyGravity();
    this.rotationInterval = setInterval(() => {
      if (!this.isSplashed) {
        this.playAnimation(this.BOTTLE_ROTATION);
        this.x += 10;
      }
    }, 25);
    this.splashInterval = setInterval(() => {
      if (!this.isSplashed && this.y + this.height >= this.groundY) {
        this.onSplash();
      }
      if (this.enemies) {
        this.checkCollision(this.enemies);
      }
    }, 20);
  }

  checkCollision(enemies) {
    enemies.forEach((enemy) => {
      if (!this.isSplashed && !enemy.isDead && this.isColliding(enemy)) {
        enemy.die();
        this.onSplash();
      }
    });
  }

  onSplash() {
    this.isSplashed = true;
    clearInterval(this.rotationInterval);
    this.playAnimation(this.BOTTLE_SPLASH);
    this.splash_sound.play();
    clearInterval(this.splashInterval);
  }
}
