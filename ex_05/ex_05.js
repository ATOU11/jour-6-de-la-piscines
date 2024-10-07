// on déclare une constante 
const car = {
  brand: 'Aston Martin',
  model: 'DB5',
  color: 'grey',
  power: '300hp',
  //  on déclare une méthode nommée linInfo
  logInfo() {
  // on affiche une chaîne de caractères contenant les informations de l'agent
    console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
  }
};
// on déclare une constante 
const agent = {
  firstName: "James",
  lastName: "Bond",
  code: "007",
  age: 57,
  car,
  logInfo() {
  // on affiche une chaîne de caractères contenant les informations de l'agent
    console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age}`);
    this.car.logInfo();
  }
};
