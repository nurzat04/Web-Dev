let conf = confirm("You must be at least 18 years old to view this content.");
let name = prompt("What's your name?");
let age = prompt("What's your age?");

if (age>=18) {
alert(`Welcome ${name}!`);
}
else {
alert(`Sorry ${name}, you must be at least 18 years old to view this content.`);

}