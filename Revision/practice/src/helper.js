
let newTicket = (n)=>{
    let arr = new Array();
    for(let i=0;i<n;i++) {
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}

let sum = (ticket)=>{
    let data = ticket.reduce((pre,next)=>{
        return pre+next;
    });
    return data;
}

export {newTicket , sum};