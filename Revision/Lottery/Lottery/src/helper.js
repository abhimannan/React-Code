
function generateArr(n) {
    let arr = new Array(n);
    for(let i=0;i<n;i++) {
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(arr) {
    let sum = arr.reduce((pre,next)=>{
        return pre+next;
    });
    return sum;
}
export {generateArr,sum};