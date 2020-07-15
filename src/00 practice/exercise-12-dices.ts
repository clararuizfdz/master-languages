console.log("************** PRACTICE *********************");
console.log("Use folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");
console.log("************** JAVASCRIPT FUNDAMENTALS *********************");
console.log("************** DICES *********************");

//DICES
// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y 
// encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:
// Hacer reset, poner a undefined o null ambos resultados.
// Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// Imprimir el resultado por consola. Ten en cuenta lo siguiente:
// Informa al usuario que debe tirar primero cuando corresponda.
// Si saca doble 6, ¡dale un premio!

class Dices{
  private result: number[];
  
  constructor(){
      this.result = [undefined,undefined];
  }

  public reset(){
    this.result = [undefined,undefined];
  }

  public play(){
     const dice1 = Math.floor(Math.random()*6) +1;
     const dice2 = Math.floor(Math.random())*6 +1;
    this.result = [dice1,dice2];
    if (dice1 ===6 && dice2===6 ){
      console.log("Congrats! You win our special prize! You got", this.result);
    }
    else{
      console.log("You got", this.result);
    }
  }
}
const dices = new Dices();
dices.play();
dices.reset();
dices.play();
dices.reset();
dices.play();
dices.reset();
dices.play();
dices.reset();
dices.play();

