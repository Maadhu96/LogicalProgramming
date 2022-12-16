// creating the new class

class Employee {
  constructor(name,designation){
this.name=name;
this.designation=designation;
  }

  value(){
    console.log(`Name of the employee is ${this.name} and the designation is ${this.designation}`)
  }
}

company=new Employee("swaroop","software Engineer")
company.value()