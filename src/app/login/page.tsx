'use client'
import Link from "next/link";
import Form from "@/components/form/form";
import InputText from "@/components/inputText/inputText";
import Button from "@/components/button/button";
import AuthService from "@/services/AuthService";
import { useState } from "react";
import { useRouter } from 'next/navigation'

const Login = (): React.ReactElement => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const router = useRouter();

    const onSubmit = async (): Promise<void> => {
        try {
            await AuthService.login(email, password);
            router.push("/todo")
        } catch (error) {
            setError(true);
        }
    }

    return (
        <div className='flex flex-col justify-center min-h-screen p-20'>
        <div className='w-full max-w-xl p-6 m-auto bg-slate-800 rounded-md shadow-md'>
            <h1 className='text-3xl font-semibold text-center underline'>Sign in</h1>
            {error && <div className='mt-6 text-red-400'>Invalid login/password</div>}
            <Form onSubmit={onSubmit}>
                <div className='flex flex-col gap-4'>
                    <InputText type='email' id='email' placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputText type='password' id='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <Button>Login</Button>
                </div>
            </Form>
            <div className='mt-8 text-xs font-light text-center'>
                <span>Don't have an account? </span>
                <Link href='/register' className='font-medium text-teal-300 hover:underline'>Sign up</Link>
            </div>
        </div>
    </div>
    )
  }
  
  export default Login;
  