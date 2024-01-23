'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Link from 'next/link';
import GoogleSignInButton from '../GoogleSignInButton';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"
import styles from './signin.module.css';
import Image from 'next/image';
import BannerImage from '../../public/images/user.png';
import { useState } from 'react';

// interface SignInFormProps {
//   chatId: string;
// }

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
  .string()
  .min(1, 'Password is required')
  .min(8, 'Password must have than 8 characters'),
});

// const SignInForm: React.FC<SignInFormProps> = ({ chatId }) => {
  const SignInForm =()=>{
  const router = useRouter();
  const {toast} = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async(values: z.infer<typeof FormSchema>) => {
    try{
      setIsLoading(true);
      const signInData = await signIn('credentials',{
        email: values.email,
        password: values.password,
        redirect: false,
      });
      
  //     if(signInData?.error){
  //       toast({
  //         title: "Error",
  //         description: "Oops! Something went wrong",
  //         variant: "destructive",
  //       })
  //     }else{
  //       router.refresh();
  // router.push('/');
  
  //     }

      if (signInData?.error) {
        if (signInData.error === 'EmailNotFoundError') {
          // Handle the case where the email doesn't exist in the database
          toast({
            title: 'Error',
            description: 'User with this email does not exist. Please sign up.',
            variant: 'destructive',
          });
        } else {
          // Handle other authentication errors
          toast({
            title: 'Error',
            description: 'User with email or password does not exist! Please sign up.',
            variant: 'destructive',
          });
        }
      } else {
        // Successful sign-in
        router.refresh();
        router.push('/');
      }
    }catch(err){
      setIsLoading(false);
      console.error('Sign In Error:', err);
      toast({
        title: 'Error',
        description: 'Oops! Something went wrong.',
        variant: 'destructive',
      });
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div className={`${styles['body-reset']} ${styles['body-content']} container-fluid`}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
        <h1 className={styles.heading}>Welcome Back 👋</h1>
          <p className={styles['heading-2']}>Welcome back! Please enter your details.</p>
          <div className="card-text">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles['form-style']}>
          <div className='form-group'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={styles.email}>Email</FormLabel>
                <FormControl>
                  <Input className={`${styles['form-input-style']} focus-style form-control form-control-sm`} placeholder='mail@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
          <div className='form-group'>
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={styles.password}>Password</FormLabel>
                <FormControl>
                  <Input
                  className={`${styles['form-input-style']} focus-style form-control form-control-sm`}
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className={styles['forgot-password']}>
                  <Link href="/request-reset-password" className={styles['forget-password']}
                    >Forget Password?</Link>
                </div>
          </div>
        <Button disabled={isLoading} className={`btn btn-primary btn-block ${styles['sign-up-btn']} ${styles['login-link']}`} type='submit'>
        {isLoading && (
        <svg xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-4 w-4 mr-2 animate-spin'>
          <path d='M21 12a9 9 0 1 1-6.219-8.56'/>
        </svg>
      )}
          Login
        </Button>
                <GoogleSignInButton>Sign in with Google</GoogleSignInButton>
        <p className={styles['sign-up']}>
        Don’t have an account?
                <Link href="/sign-up" className={styles['sign-up-link']} style={{ color: 'white', textDecoration: 'none' }}> Sign up </Link>
              </p>
      </form>
    </Form>
    </div>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
          <Image className={styles['user-img']} src={BannerImage} alt="Auth image" />
        </div>
  </div>
  </div>
  );
};

export default SignInForm;
