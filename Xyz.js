
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
