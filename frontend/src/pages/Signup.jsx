import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { InputBox } from '../components/Inputbox';
import { BottomWarning } from '../components/BottomWarning';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    return (
        <div className=' flex min-h-[100dvh] bg-slate-300 items-center justify-center'>
            <div className='flex flex-col bg-white w-96 items-center justify-center p-3 rounded-lg'>
                <Heading text={"Sign up"} type={"main-heading"}/>
                <Heading text={"Enter your information to create an account"} type={"sub-heading"}/> 
                <InputBox label={"First Name"} onChange={e => {
                    setFirstName(e.target.value)
                }} placeholder={"John"}/>
                <InputBox label={"Last Name"} onChange={e => {
                    setLastName(e.target.value)
                }} placeholder={"Doe"}/>
                <InputBox label={"Username"} onChange={e => {
                    setUsername(e.target.value)
                }} placeholder={"testuser@123"}/>
                <InputBox label={"Password"} onChange={e => {
                    setPassword(e.target.value)
                }} placeholder={"example123"} isPassword={true}/>
                
                <div className='w-full mt-4'>
                    <Button text={"Sign up"} onClick={async () => {
                        const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username, firstName, lastName, password
                        });

                        if(res.status === 200){
                            navigate("/signin");
                        }
                        else{
                            alert("Error : ", res.data.message);
                        }
                        
                    }}/>
                </div>
                <BottomWarning label={"Already Have an Account? Click here to "} linkText={"Sign-in"} linkTo={"/"}/>
            </div> 
      </div> 
    )
}