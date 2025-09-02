import './Student.css';


function Student({name,age,course,hobbies,fees}) {
    let hoby = hobbies.map((el)=> <p>{el}</p>);
    return(
        <div className="card">
           <h3>Name : {name}</h3>
           <p>Age : {age}</p>
           <p>Course : {course}</p>
           <p>Amount : {fees}</p>
           <p>Hobbies : {hoby}</p>
        </div>
    );
}

export default Student;
