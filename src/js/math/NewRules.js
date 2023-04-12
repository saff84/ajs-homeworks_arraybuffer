export default class NewRules {
  constructor() {
    this.stoned = false;
  }

  getStoned() {
    return this.stoned;
  }

  setStoned(status) {
    this.stoned = status;
  }

  getAttack() {
    return this.attack;
  }

  setAttack(cell) {
    if (cell > 10) {
      this.attack = 0;
    }

    this.attack = this.attack - (cell - 1) * 0.1 * this.attack;

    if (this.getStoned()) {

      this.attack = this.attack - Math.log2(cell) * 5

    }

  }
}