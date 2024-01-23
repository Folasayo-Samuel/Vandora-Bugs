'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"
import styles from './requestResetPassword.module.css';
import Image from 'next/image';
import BannerImage from '@/public/images/user.png';
import { useState } from 'react';
// import {User} from '@prisma/client';


// interface UserProps{
//   user: User | null;
// }

const FormSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
  })
  

const RequestResetPassword = () => {
  const router = useRouter();
  const {toast} = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async(values: z.infer<typeof FormSchema>) => {
    try{
     setIsLoading(true);

     const response = await fetch('/request-reset-password', {
       method: 'POST',
       headers: {
         'Content-Type':'application/json'
       },
       body: JSON.stringify({
         email: values.email,
       })
     })

     
     if(response.ok){
       toast({
         title: "Success",
         description: "Password reset email sent successfully.",
         variant: "default",
        })
        router.push('/reset-password')
      }else{
   const data = await response.json();
   toast({
     title: "Error",
     description: data.error || "Oops! Something went wrong",
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
          <h1 className={styles.heading}>Reset Password</h1>
          <p className={styles['heading-2']}>Enter your email address.</p>
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
        <Button disabled={isLoading} className={`btn btn-primary btn-block mt-2 ${styles['reset-password-btn']}`} type='submit'>
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
          Continue
        </Button>
        <p className={styles['sign-up']}>
                Did you want to login Instead?
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
}

export default RequestResetPassword
