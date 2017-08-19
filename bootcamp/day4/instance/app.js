// Instructions:

// We said you absolutely must call constructors with new. But don't take our word for it—call your constructor without new.
function User(firstName, lastName, email) {
    if (!(this instanceof User)) {
        // the constructor was called without "new".
        return new User(firstName, lastName, email);
    }
    console.log(this)
    this.firstName = firstName,
        this.lastName = lastName,
        this.email = email
};


var daniel = new User('daniel', 'hernandez', 'daniel56hdz@gmail.com');
var introduce = function(){
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
}
daniel.introduce = introduce;
introduce();
console.log(daniel)
