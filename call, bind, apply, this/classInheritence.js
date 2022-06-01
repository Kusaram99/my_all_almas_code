// class inheritence 

class Parent {
    constructor(surname){
        // this.name = name;
        // this.age = age;
        this.surname = surname;
    }
    getDetail(){
        console.log("get Detail:- ",this.name);
    }
}


// child 
class Child extends Parent{
    constructor(name, age, catg, surname){
        super(surname);
        this.name = name;
        this.age = age;
        this.category = catg;
    }

    childSay(){
        super.getDetail();
        console.log("child say, my name is : ", this.name);
    }
}
// child
let child1 = new Child("Sursing", 27, "pawara", "Jadhaw");

console.log(child1);
// child1.getDetail();