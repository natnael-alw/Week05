
class Driver{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    describe(){
     return   ` ${this.name} is the driver and he is ${this.age} years old`

    }
}
class Raceteam {
    constructor (name){
    this.name= name
    this.drivers = [];
}

addDriver(driver){
if (driver instanceof Driver &&  this.drivers.length <1){
 return this.drivers.push(driver)
}


}   
describe(){
   return `This is team ${this.name} ` 
}

}


class Menu  {
constructor (){ 
    this.raceteams = [];
    this.yourSelectedraceteam = null ;
    

}
 start(){ 
    let selection = this.showMainMenu();
    while (selection!=0){
    switch(selection){
        case '1' :
            this.createRaceteam();
            break;
        case '2' : 
            this.viewRaceteam();
            break;
        case '3' :
            this.deleteRaceteam();
            break;
        case '4' :
            this.displayYourraceteams();
            break;
        default :
            selection =0;
    }
    selection = this.showMainMenu();
}
alert(`Thank you for visiting our site.`)
}
showMainMenu(){
     return prompt(`
     MAXIMUM DRIVER PER TEAM IS 1
     0) exit
     1) creat a new raceteam
     2) View raceteam
     3) delete raceteam
     4) see all raceteams
     `);
     }
  
showDriverMenu(info){
    return prompt(`
        0) back
        1) add a driver
        2) delete a driver

------------------
${info}
    `);
}

displayYourraceteams(){
    let raceteamHolder = ""
    for ( let i=1; i < this.raceteams.length; i++){

    raceteamHolder += i + `) ` + this.raceteams[i].name + `\n`
    }

alert(raceteamHolder)
}

createRaceteam(){
let name = (prompt `Enter desired raceteam name: `)
this.raceteams.push(new Raceteam(name));
}

viewRaceteam (){

    let index = prompt (`enter the index of the raceteam you want see:`)
    if (index > -1 && index < this.raceteams.length){
    this.yourSelectedraceteam = this.raceteams[index];

    let details=' ' + this.yourSelectedraceteam.describe() + '\n' 
//details+= this.yourSelectedraceteam.drivers[i].describe()
 for (let i = 0; i < this.yourSelectedraceteam.drivers.length ; i++) {
details += i + ')' + this.yourSelectedraceteam.drivers[i].describe() + '\n'
}

    let selection1 = this.showDriverMenu(details)
   switch(selection1){
    case'1' :
       this.createDriver() 
        break;
     case '2':
       this.deleteDriver()
           }
        }
 }


createDriver(){
   let name = prompt ('enter driver name.')
   let age = prompt('enter age of the driver')
this.yourSelectedraceteam.addDriver(new Driver(name,age))
}

    


deleteDriver(){
   let index = prompt(`enter the name of the driver to delete`)
    if(index > -1 && index < this.yourSelectedraceteam.drivers.length){
        this.yourSelectedraceteam.drivers.splice(index,1)

    
}
}


deleteRaceteam(){
    let index = prompt(`enter the name of the team you want to delete`)
 if (index >-1 && index < this.yourSelectedraceteam.length){
    this.yourSelectedraceteam.splice(index,1)
 }
    
}
}
let menu = new Menu();
menu.start();