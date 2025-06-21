import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/Inputbox'
import { BottomWarning } from '../components/BottomWarning'

export const Signup = () => {
    return (
        <div className=' flex min-h-[100dvh] bg-slate-300 items-center justify-center'>
            <div className='flex flex-col bg-white w-96 items-center justify-center p-3 rounded-lg'>
                <Heading text={"Sign up"} type={"main-heading"}/>
                <Heading text={"Enter your information to create an account"} type={"sub-heading"}/> 
                <InputBox label={"First Name"} placeholder={"John"}/>
                <InputBox label={"Last Name"} placeholder={"Doe"}/>
                <InputBox label={"Email"} placeholder={"testuser123@yopmail.com"}/>
                <InputBox label={"Password"} placeholder={"example123"} isPassword={true}/>
                <div className='w-full mt-4'>
                    <Button text={"Sign up"}/>
                </div>
                <BottomWarning label={"Already Have an Account? Click here to "} linkText={"Sign-in"} linkTo={"/"}/>
            </div> 
      </div> 
    )
}