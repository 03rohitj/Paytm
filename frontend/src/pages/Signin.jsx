import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { InputBox } from '../components/Inputbox'
import { BottomWarning } from '../components/BottomWarning'

export const Signin = () => {
    return (
        <div className=' flex min-h-[100dvh] bg-slate-300 items-center justify-center'>
            <div className='flex flex-col bg-white w-96 items-center justify-center p-3 rounded-lg'>
                <Heading text={"Sign in"} type={"main-heading"}/>
                <Heading text={"Enter your credentials to access your account"} type={"sub-heading"}/> 
                <InputBox label={"Email"} placeholder={"testuser123@yopmail.com"}/>
                <InputBox label={"Password"} placeholder={"example123"} isPassword={true}/>
                <div className='w-full mt-4'>
                    <Button text={"Sign in"}/>
                </div>
                <BottomWarning label={"Don't have an Account? Click here to "} linkText={"Sign-up"} linkTo={"/signup"}/>
            </div> 
        </div> 
    )
}