function Hello({name , fontcolor}){
    let styles = {backgroundColor : fontcolor};
    return(
       <div style={styles}>
           <p>{name}</p>       
       </div>
    )
}
export default Hello;