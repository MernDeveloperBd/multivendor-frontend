import  { useState } from 'react';
import LoginForm from '../LoginForm';
import SignupForm from '../SignupForm';
import { Button } from '@mui/material';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <div className='w-[30%] h-[85vh] rounded-md border border-gray-300 shadow-lg mx-auto'>
                <img className='w-[60%] h-[160px] mx-auto rounded-t-md border border-teal-300' src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png" alt="logo" />

                <div className='mt-6 px-10'>
                    {isLogin ? <LoginForm /> : <SignupForm />}
                    <div className='flex items-center justify-center gap-1 mt-2'>
                        <p>{isLogin ? "Don't have an account?" : "Already have an account"}</p>
                        <Button  onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Sign Up" : "Login"}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Auth;