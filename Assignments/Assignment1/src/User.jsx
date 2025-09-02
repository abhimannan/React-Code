function User({image,username,bio}) {
    let styles = {color : "red",backgroundColor : "grey"};
    return(
        <div style={styles}>
            <img src={image}></img>
                <h3>{username}</h3>
                <p>{bio}</p>
        </div>
    )
}

export default User;