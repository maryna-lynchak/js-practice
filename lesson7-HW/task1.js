function handleNum (number, cb1, cb2) {
 if (number %2 === 0) {
     cb1();
 } else {
    cb2();
 }
}

function handleEven () {
    console.log("number is even")
}


function handleOdd () {
    console.log("number is odd")
}

handleNum(4, handleEven, handleOdd);