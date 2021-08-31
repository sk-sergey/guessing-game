class GuessingGame {
    constructor() {
        this.range = [null,null];
        this.candidate = 0;
    }


    setRange(min, max) {
        this.range[0] = min
        this.range[1] = max
    }

    guess() {
        return this.candidate = Math.round((this.range[1] + this.range[0]) / 2)
    }

    lower() {
        this.setRange(this.range[0], this.candidate)
    }

    greater() {
        this.setRange(this.candidate,this.range[1] )        
    }
}

module.exports = GuessingGame;
