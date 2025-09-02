function Quote() {
    let rex = ["this is my dream","hellow makkale","valakam thalaivaa"];
    let index = Math.floor(Math.random() * rex.length);
    let randomquote = rex[index];
    return(
        <>
           
            <h2>{randomquote}</h2>
        </>
    )
}

export default Quote;
