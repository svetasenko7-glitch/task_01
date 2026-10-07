let result;
let check = false;

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");
const elementResult = document.getElementById("result");

const elementVerify = document.getElementById("verify");
const elementSend = document.getElementById("send");


function verify() {
    console.log("a, b, c");
    let a = parseFloat(elementA.value);
    let b = parseFloat(elementB.value);
    let c = parseFloat(elementC.value);
    console.log(a, b, c);

    if (a < b && b < c) {
        result = "Выполняется неравенство A < B < C";
        check = true;
    } else if (a < b && b > c) {
        result = "Выполняется неравенство A < B > C";
        check = true;
    } else {
        result = "Ни одно из заданных неравенств не выполняется";
        check = false;
    }

    elementResult.value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

elementVerify.addEventListener('click', verify);
elementSend.addEventListener('click', send);
