import { useState } from "react";
import { useFormik } from 'formik';

 const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username is Required!';
   }
   if (!values.remark) {
     errors.remark = 'Remark is Required!';
   }
   if (!values.rating) {
     errors.rating = 'Rating is Required!';
   }
   return errors;
 };

function CommentForm() {
    // const [data,setData] = useState({
    //     username : "",
    //     remark : "",
    //     rating : 1
    // });
    const formik = useFormik({
     initialValues: {
       username: '',
       remark: '',
       rating: '',
     },
     validate,
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });

    // const [isValid,setIsValid] = useState(true);

    // let handleChanges = (event)=>{
    //     let field = event.target.name;
    //     let value = event.target.value;
    //     setData((curData)=>{
    //         return {
    //             ...curData,
    //             [field] : value
    //         }
    //     });
    // }

    // let handleSubmit = (event)=>{
    //     if(!data.username) {
    //         setIsValid(false);
    //         return;
    //     }
    //     event.preventDefault();
    //     addNewComment(data);
    //     setData({
    //         username : "",
    //         remark : "",
    //         rating : 1
    // })
    // }
    return(
        <div id="commentForm">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input name="username" value={formik.values.username} type="text" placeholder="Username" id="username" onChange={formik.handleChange}/>
                {
                   formik.errors.username ? <div>{formik.errors.username}</div> : null
                }
                <br />
                <label htmlFor="remark">Remarks</label>
                <input name="remark" value={formik.values.remark} type="text" placeholder="Remaks" id="remark" onChange={formik.handleChange}/>
                {
                   formik.errors.remark ? <div>{formik.errors.remark}</div> : null
                }
                <br />
                <label htmlFor="rating">Rating</label>
                <input name="rating" min={1} max={5} value={formik.values.rating} type="number" placeholder="Rating" id="rating" onChange={formik.handleChange}/>
                {
                   formik.errors.rating ? <div>{formik.errors.rating}</div> : null
                }
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CommentForm;