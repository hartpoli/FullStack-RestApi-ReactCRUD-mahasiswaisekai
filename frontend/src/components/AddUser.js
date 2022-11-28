import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
const [nim, setNim] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("Male");
const [hobi, setHobi] = useState("");
const [semester, setSemester] = useState("");
const navigate = useNavigate();

const saveUser = async (e) =>{
    e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users', {
            nim,
            name,
            email,
            gender,
            hobi,
            semester
        });
        navigate("/");
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">Nim</label>
                    <div className="control">
                        <input 
                        type="number" 
                        className="input" 
                        value={nim}
                        onChange={(e)=> setNim(e.target.value)}
                        placeholder='nim'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                        type="text" 
                        className="input"
                        value={name}
                        onChange={(e)=> setName(e.target.value)} 
                        placeholder='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input 
                        type="email" 
                        className="input" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        placeholder='email'/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                        <div className="select is fullwidth">
                            <select value={gender}
                            onChange={(e)=> setGender(e.target.value)}>
                                <option value="Male">Laki-laki</option>
                                <option value="Female">Perempuan</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Hobi</label>
                    <div className="control">
                        <input 
                        type="text" 
                        className="input"
                        value={hobi}
                        onChange={(e)=> setHobi(e.target.value)} 
                        placeholder='hobi'/>
                    </div>
                </div> 
                <div className="field">
                    <label className="label">semester</label>
                    <div className="control">
                        <input 
                        type="number" 
                        className="input" 
                        min="1" 
                        max="12" 
                        value={semester}
                        onChange={(e)=> setSemester(e.target.value)}
                        placeholder='semester'/>
                    </div>
                </div> 
                <div className="field">
                    <button type='submit' className='button is-success'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddUser