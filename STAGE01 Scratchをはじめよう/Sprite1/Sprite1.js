/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 47,
        y: 55,
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 47,
        y: 55,
      }),
    ];

    this.sounds = [new Sound("meow", "./Sprite1/sounds/meow.wav")];

    this.triggers = [];
  }
}
