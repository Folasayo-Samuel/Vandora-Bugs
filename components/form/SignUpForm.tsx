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
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"
import styles from './signup.module.css';
import Image from 'next/image';
import BannerImage from '../../public/images/user.png';
import { useState } from 'react';

const FormSchema = z
  .object({
    name: z.string().min(1, 'Full Name is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const SignUpForm = () => {
  const router = useRouter();
  const {toast} = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async(values: z.infer<typeof FormSchema>) => {
   try{
    setIsLoading(true);
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password
      })
    })

if(response.ok){
  router.push('/sign-in')
}else{
  toast({
    title: "Error",
    description: "Oops! Something went wrong",
    variant: "destructive",
  })
}
   }catch(err){
    setIsLoading(false)
  }finally{
    setIsLoading(false)
  }
  }


  return (
    <div className={`${styles['body-reset']} ${styles['body-content']} container-fluid`}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h1 className={styles.heading}>Sign Up</h1>
          <p className={styles['heading-2']}>Welcome back! Please enter your details.</p>
          <div className="card-text">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles['form-style']}>
        <div className='form-group'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={styles.email}>Full Name</FormLabel>
                <FormControl>
                  <Input className={`${styles['form-input-style']} focus-style form-control form-control-sm`} placeholder='johndoe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div>
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
          </div>
          <div className='form-group'>
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem>
                <FormLabel className={styles.password}>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                  className={`${styles['form-input-style']} focus-style form-control form-control-sm`}
                    placeholder='Re-Enter your password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button disabled={isLoading} className={`btn btn-primary btn-block ${styles['sign-up-btn']}`} type='submit'>
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
          Sign up
        </Button>
      <GoogleSignInButton>Sign up with Google</GoogleSignInButton>
        <p className={styles['sign-up']}>
                Already have an account?
                <Link href="/sign-in" className={styles['sign-up-link']} style={{ color: 'white', textDecoration: 'none' }}> Sign in </Link>
              </p>
      </form>
    </Form>
    </div>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12">
          <Image className={styles['user-img']} src={BannerImage} alt="Registration image" />
        </div>
  </div>
  </div>
  );
};

export default SignUpForm;
