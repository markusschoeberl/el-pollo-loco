class Coins extends DrawableObject {
  IMAGES_COIN = [
    "assets/img/8_coin/coin_1.png",
    "assets/img/8_coin/coin_2.png",
  ];

  y = 350;

  constructor() {
    super();
    this.loadImage("assets/img/8_coin/coin_1.png");
    this.loadImages(this.IMAGES_COIN);
    this.width = 100;
    this.height = 100;
    this.x = 300 + Math.random() * 4000;
    this.animateCoin();
  }

  animateCoin() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COIN);
    }, 200);
  }
}
