'use client';
import Button from "@/components/button/button";
import Form from "@/components/form/form";
import InputText from "@/components/inputText/inputText";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = (): React.ReactElement => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const onSubmit = async (): Promise<void> => {
        await AuthService.register(email, password);
        router.push("/todo");
    }

    return (
        <div className='flex flex-col justify-center min-h-screen p-20'>
        <div className='w-full max-w-xl p-6 m-auto bg-slate-800 rounded-md shadow-md'>
            <h1 className='text-3xl font-semibold text-center underline'>Sign Up</h1>
            <Form onSubmit={onSubmit}>
                <div className='flex flex-col gap-4'>
                    <InputText type='email' id='email' placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
                    <InputText type='password' id='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <Button>Register</Button>
                </div>
            </Form>
        </div>
    </div>
    )
  }
  
  export default Login;
  