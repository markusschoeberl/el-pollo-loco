class Level {
  enemies;
  clouds;
  backgroundObjects;
  levelLength = 6;
  layerWidth = 863;
  level_end_x = this.levelLength * this.layerWidth - 780;

  constructor(enemies, clouds, levelLength, layerWidth) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.levelLength = levelLength;
    this.layerWidth = layerWidth;
    this.backgroundObjects = this.generateBackground();
  }

  generateBackground() {
    let objects = [];
    for (let i = 0; i < this.levelLength; i++) {
      let x = i * this.layerWidth;
      objects.push(
        new BackgroundObject("assets/img/5_background/layers/air.png", x)
      );
      objects.push(
        new BackgroundObject(
          `assets/img/5_background/layers/3_third_layer/${(i % 2) + 1}.png`,
          x
        )
      );
      objects.push(
        new BackgroundObject(
          `assets/img/5_background/layers/2_second_layer/${(i % 2) + 1}.png`,
          x
        )
      );
      objects.push(
        new BackgroundObject(
          `assets/img/5_background/layers/1_first_layer/${(i % 2) + 1}.png`,
          x
        )
      );
    }
    return objects;
  }
}
