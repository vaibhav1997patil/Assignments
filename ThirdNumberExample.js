let obj1 = { "greeting": "hello" }; //obj1 is assigned a new object with the property "greeting" and value set to "hello"
let obj2 = obj1; //obj2 is assigned the same reference as obj1, meaning it now points to the same object 
obj1["greeting"] = "Bye";  //The value of the "greeting" property in obj1 is changed from "hello" to "Bye"
console.log(obj1);  //The updated value of obj1 is { greeting: 'Bye' }
console.log(obj2);  //The value of obj2 is also { greeting: 'Bye' }
