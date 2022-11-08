class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return`Hello ${this.firstName} you bastard`
    }
}

const user1 = new User("gino", "arnone")

console.log(user1.sayHello());


class Admin extends User {
    constructor(firstName, lastName, adminStatus){
        super(firstName, lastName);
        this.adminStatus = adminStatus;
    }


    isItTrue() {
        if(this.adminStatus == true){
            return console.log("is an admin")
        } else {
            return console.log("not an admin")
        }
    }
}

const user2 = new Admin("bilbo", "baggins", true);
user2.isItTrue()

//********* SHAPE CLASS EXERCISE MDN ***********/

class Shape {
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() { 
        return this.sides * this.sideLength
    }

    // name;
    // sides;
    // sideLength;
    
    }

    const square = new Shape("square", 4, 5);
    console.log(square.calcPerimeter()) 

    const triangle = new Shape("triangle", 3, 3);
    console.log(triangle.calcPerimeter())



