console.log("************** DELIVERABLE 05 *********************");
console.log("************** SLOT MACHINE *********************");

class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  public play() {
    this.coins += 1;
    const firstSlot = this.randomBool();
    const secondSlot = this.randomBool();
    const thirdSlot = this.randomBool();
    const win = firstSlot && secondSlot && thirdSlot;

    if (win) {
      console.log(`Congratulations!!!. You won ${this.coins}!!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }

  private randomBool(): boolean{
      return Boolean(Math.random() >= 0.5);
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();