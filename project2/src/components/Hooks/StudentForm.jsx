import React ,{useState}from 'react'

const StudentForm = () => {

    // form state
    const [Student,setStudent] = useState({
        name:"",
        course:""
    })

    const[studentarr,setStudentarr]=useState([])
    const[ShowForm,setShowForm]= useState(true)


    function handleChange(e){
    // console.log(e.target.value);
        setStudent({
            ...Student,
            [e.target.name]:e.target.value
        })
        //  console.log(Student);
    }




    function handleSubmit(e){
        e.preventDefault();
// console.log("hellow");

        if(Student.name === "" || Student.course === "")return;
        setStudentarr([...studentarr,Student])
        // console.log(studentarr);

        setStudent({name:"",course:""})
        
        
    }


  return (
    <div style={{ padding:"20px"}}>
        <h2>Student Managment</h2>

    <button onClick={()=>setShowForm(!ShowForm)}>{
        ShowForm ? "HideForm":"showForm"}
        </button>

    {ShowForm &&
        <form onSubmit={handleSubmit}>
        <input type="text" name = "name" placeholder="Student name"
        value={Student.name}
        onChange={handleChange} />
        <br/>
        <input type="text" name = "course" placeholder="Student course" 
        value={Student.course}
        onChange={handleChange}/>
        <br/>
        <br/>
        <button type='submit'>Add Student</button>
        </form>
    }



    <hr/>
    {studentarr.length === 0 ? (
        <p>no student found</p>):(
        studentarr.map((stu)=>(
            <p>{stu.name} - { stu.course}</p>

        ))
    )}


    </div>
  );
};

export default StudentForm