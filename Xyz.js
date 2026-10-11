
function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

function sayHello() {
    console.log("Hello!");
}

let throttledHello = throttle(sayHello, 2000);

throttledHello();
throttledHello();
throttledHello();

setTimeout(throttledHello, 2100);
const greet = () => {
    console.log("Hello World!");
};

greet();
const square = (n) => {
    return n * n;
};

console.log(square(5));
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(6));