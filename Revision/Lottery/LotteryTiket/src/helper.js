

function generateArr(n) {
    let arr = new Array(n);
    for(let i=0;i<=n;i++) {
        let num = Math.floor(Math.random()*10);
        arr[i] = num;
    }
    return arr;
}

let WinNum = (ticket)=>{
    let sum = ticket.reduce((pre,next)=>{
        return pre+next;
    });
    return sum;
}
export {generateArr , WinNum};