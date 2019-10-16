var step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000)
    })
}

var step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
            resolve();
        },1000)
    })
}

var step3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(3)
            resolve(1211)
        },1000)
    })
}

(async () => {
    console.log(0);
    //该异步会被等待
    await step1();
    await step2();
    console.log(2.5)
    var num = await step3();
    console.log(4);
    console.log(num);
})()