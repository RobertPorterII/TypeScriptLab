// ========Part 1
// @ts-check

// ======Part 2 convert to typescript
class Vehicle {
  // status union of literals
    public status: 'stopped' | 'started' = "stopped";
  // could list wheel as type :any ,but thats a little to broad since we narrowed it down to number and string

  // make the properites public
    public make;
    public model;
    public wheels;
    // you could add the public in the constructor but it make really long code
    // constructor(public make: string,public model: string,public wheels: string | number)
    // wheels to number to fix output
    constructor(make: string,model: string,wheels: number) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  // adjust Car and Motorcycle to fix errors

  class Car extends Vehicle {
    constructor(make: string, model: string) {
      // string "four" , later on make it number for the function output
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      // wheels number 2 here
      super(make, model, 2);
    }
  }
  
  // paramter type change to ts

  function printStatus(vehicle : Vehicle) {
    // started 
    if (vehicle.status === "started") {
      console.log("The vehicle is running.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  // camel case
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  // math problem done with wheel here so will need string and number to convert at top
  // make Buick wheels a number
  myBuick.wheels = myBuick.wheels - 1;
  console.log(myBuick.wheels);
  // change to model from mdl error to fix it 
  console.log(myBuick.model);
  