import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/Inputbox'
import { BottomWarning } from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className=' flex min-h-[100dvh] bg-slate-300 items-center justify-center'>
            <div className='flex flex-col bg-white w-96 items-center justify-center p-3 rounded-lg'>
                <Heading text={"Sign in"} type={"main-heading"}/>
                <Heading text={"Enter your credentials to access your account"} type={"sub-heading"}/> 
                <InputBox label={"Username"} placeholder={"testuser123"} onChange={ (e) => {
                    setUsername(e.target.value);                    
                }}/>
                <InputBox label={"Password"} placeholder={"example123"} isPassword={true} onChange={ (e) => {
                    setPassword(e.target.value);                    
                }}/>
                <div className='w-full mt-4'>
                    <Button text={"Sign in"} onClick={async () => {
                        const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
                            username, password
                        });

                        if(res.status === 200){
                            console.log("####FE SET TOKEN : ", res.data.token);
                            localStorage.setItem("token", res.data.token);
                            navigate("/dashboard");
                        }
                        else{
                            alert("Error : ", res.data.message);
                        }
                        
                    }}/>
                </div>
                <BottomWarning label={"Don't have an Account? Click here to "} linkText={"Sign-up"} linkTo={"/signup"}/>
            </div> 
        </div> 
    );
    
    
    
}

