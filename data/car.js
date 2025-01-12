export class Car{
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;
  constructor(carType) {
    this.#brand = carType.brand
    this.#model = carType.model
    this.speed = carType.speed
    this.isTrunkOpen = carType.isTrunkOpen
  }
  
  openTrunk() {
    if (this.speed <= 0) {
      this.isTrunkOpen = true
    } else {console.log('Stop the thing crazy ass');}
  }

  closeTrunk() {
    if (this.isTrunkOpen = true) {
      this.isTrunkOpen = false
    } else {console.log('Closed')}
  }

  go() {
    if (this.speed < 200 && this.isTrunkOpen === false) {this.speed += 5}
    else {return 'fuc u'}
  }

  brake() {
    if (this.speed > 0) {this.speed -= 5}
    else {return 'fuc u'}
  }

  displayInfo() {
    console.log(`${this.#brand}, ${this.#model}, ${this.speed} km/h, ${this.isTrunkOpen}`);
  }
}


export class RaceCar extends Car{
  constructor(carType) {
    super(carType)
    this.acceleration = carType.acceleration
  }
  
  acceleration = 0;
  go() {
    if (this.speed < 300) {this.speed += this.acceleration}
    else {return 'fuc u'}
  }
  openTrunk() {
    console.log('Does not have one');
  }
  closeTrunk() {
    console.log('Does not have one');
  }
}

const VroomCar = new RaceCar( {
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20,
  isTrunkOpen: 'Does not Have a trunk',
  speed: 0 
})


const Toyoda = new Car( {
  brand: 'Toyota',
  model: 'Corolla',
  speed: 0,
  isTrunkOpen: false
})
const Tesla = new Car( {
  brand: 'Tesla',
  model: 'Model 3',
  speed: 0,
  isTrunkOpen: false
})



VroomCar.go()
VroomCar.go()
Toyoda.go()
Tesla.brake()
Toyoda.openTrunk()
Tesla.openTrunk()
Toyoda.closeTrunk()
// console.log(Toyoda)
// console.log(Tesla)



Toyoda.displayInfo()
Tesla.displayInfo()
VroomCar.displayInfo()
