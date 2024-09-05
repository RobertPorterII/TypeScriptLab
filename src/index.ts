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
  
  //======= Part 3 NCycle Class <t> MEANS TYPE <Type>

  // <T> generic type
  class NCycle<T> {
 
      public status: 'stopped' | 'started' = "stopped";
    
      public make;
      public model;
      public wheels;
      // array of generic type
      constructor(make: T | T[], model: T | T[],wheels: number) {
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
      // new print method
      // if this.make and this.model are both arrays
      print(index: number = 0): void{
        if (Array.isArray(this.make) && Array.isArray(this.model)){
          // if parameter index exist in this.make and this.model
            if(this.make[index] && this.model[index]){
              console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}`);
              
            }

      } else {
        // if(typeof this.make === 'string' && typeof this.model === 'string'){
          console.log(`This is a ${this.make} ${this.model} NCycle`);
        // }
        // console.log(`This is a ${this.make} ${this.model} NCycle`);
        
      }


    }

    // print all method

    printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)){
        for (let i = 0; i < Math.min(this.make.length, this.model.length); i ++){
        //  for (let i = 0; i < this.make.length; i ++){
            console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`);
        }
      }
    }
  }
  // ===== Part 4 Testing
  //const test = new NCycle<string[]>()
  const testCycle1 = new NCycle<number>(1, 2, 3);
testCycle1.print();

const testCycle2 = new NCycle<string>("Ford", "F150", 4);
testCycle2.print();

const testCycle3 = new NCycle<string>("Tesla", 'Model Y', 4);
testCycle3.print(4);


const makes4 = ["Volkswagon", "Tesla", "Audi"];
const models4 = ["Passat", "Model X", "A4"];
const testCycle4 = new NCycle<string[]>(makes4, models4, 4);
testCycle4.print(2);
testCycle4.printAll();
