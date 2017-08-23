// Instructions:

// We said you absolutely must call constructors with new. But don't take our word for it—call your constructor without new.
function User(firstName, lastName, email) {
    if (!(this instanceof User)) {
        // the constructor was called without "new".
        return new User(firstName, lastName, email);
    }
    this.firstName = firstName,
        this.lastName = lastName,
        this.email = email
};

function Admin(firstName, lastName, email) {
    // if (!(this instanceof Admin)) {
    //     // the constructor was called without "new".
    //     return new Admin(firstName, lastName, email);
    // }
    // User.apply(this, arguments)
    Admin.prototype = new User();
    this.admin = true
};







var daniel = new User('daniel', 'hernandez', 'daniel56hdz@gmail.com');
var alice = new Admin('alice', 'bob', 'someEmail@gmail.com');
console.log(alice)
console.log(alice instanceof Admin)


// var admin = function(){
//     return true

// }
// daniel.admin = admin;
// var superUser = User('Alice', 'Bob', 'random@email.com');
// superUser.call(admin)
// console.log(superUser)

// daniel.introduce = introduce;   
// introduce();
// console.log(daniel)