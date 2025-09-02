

function generateRandomArr(n) {
    let arr = new Array(n);
    for(let i=0;i<n;i++) {
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function lotteryNum(arr) {
    return arr.reduce((pre,next)=> pre+next);
}

export { generateRandomArr , lotteryNum };