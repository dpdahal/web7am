//alert('test');

// window.alert('test');

// document.write("<h1>Hello JavaScript</h1>");

// document.getElementById('test').innerHTML="Hello javascript";
// document.getElementById('test').style.color = 'red';

// setTimeout(function () {
//     alert('test');
// }, 3000);

// setInterval(function () {
//     alert('test');
// }, 3000);

// confirm('Are you sure?')
// prompt("Enter your name")

// document.getElementById('test1')
//     .innerText="<b>hello</b>"
//
//
// document.getElementById('test2')
//     .innerHTML="<b>hello</b>"


// alert('test')

// var x = 10;
// var y = 20;
// console.log(x + y)
// var userName = "admin";
// console.log(userName);
// document.getElementById('test1').innerHTML = userName
// console.log(x)
// document.write(x)

// +,-,*,%
// var a = 20
// var b = 30
// var c = 40
// console.log(a > b)

// if (a > b && a > c) {
//     console.log('a ')
// } else if (b > a && b > c) {
//     console.log('b')
// } else {
//     console.log('c')
// }


// if()
// loop
// function
//
// var userName = "admin"
// var password = "admin"
//
// if (userName == 'admin' && password == 'admin') {
//     console.log("Welcome " + userName)
// } else {
//     console.log('username & password not match')
// }

// for (var x = 1; x < 10; x++) {
//     console.log(x)
// }

// var i = 0
//
// while (i < 10) {
//     console.log(i);
//     i++;
// }
//
// var a = 0
// do {
//     console.log(a);
//     a++;
// } while (a < 10);


// function test() {
//     console.log("hello function");
// }
//
// test()


// function calculate() {
//     var x = document.getElementById('num1').value;
//     var y = document.getElementById('num2').value;
//     x = parseInt(x);
//     y = parseInt(y)
//     document.getElementById('result').value = x + y;
//
// }

// function users(name, age) {
//     console.log(name);
//     console.log(age);
// }
//
// users('ram', 20);


// var dt = new Date();
// document.getElementById('clock').innerHTML = dt.getFullYear();

// setTimeout(function () {
//     alert('test');
// }, 2000);

setInterval(function () {
    var dt = new Date();
    document.getElementById('clock').innerHTML = dt;

}, 1000);
