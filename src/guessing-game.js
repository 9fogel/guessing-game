class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
      this.left = min;
      this.right = max;
      
    }

    guess() {
      this.mid = this.left + Math.round((this.right - this.left) / 2);
      this.number = this.mid;
      return this.number;
    }

    lower() {
      this.right = this.mid;
    }

    greater() {
      this.left = this.mid;
    }
}

module.exports = GuessingGame;
