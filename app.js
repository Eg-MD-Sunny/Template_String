//---Template String or Template Literals
var firstName = 'Stifen';
var lastName = 'Mr.' + firstName;
console.log('Customer Name is:',lastName);


//---Using Tempalet String
var userFirstName = "Anderson";
var userFullName = `Jonson ${userFirstName}`;
console.log(userFullName);

var user = 'Hello CyberFireBug';
var name = `Best wishes ${user} Alltime`;
console.log(name);

//---MultiVariable use in one String Template 
var studentName = "Santu";
var marks = 75;
var statement = `${studentName}
                 your marks is 
                 ${marks}`;
//document.write(statement);
document.write(`${studentName} your marks is ${marks}`);
console.log(statement);


//---Call Function & apply String Template
var firstName = "Cyber";
var lastName = "Firebug";

function fullname(x,y){
    return `${x} ${y}`;
}
var hello = `Hello ${fullname(firstName,lastName)}`;
document.write(hello);