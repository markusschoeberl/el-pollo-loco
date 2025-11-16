const level1 = new Level(
  [new Chicken(), new Chicken(), new Chicken(), new Endboss()],
  [new Cloud()],
  6,
  863
);

let throwableBottle = new ThrowableObject(x, y, level1.enemies);
