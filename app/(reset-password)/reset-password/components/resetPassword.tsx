'use client';

import { useState, useEffect } from 'react';
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
import { Button } from '@/components/ui/button';
import { useRouter} from 'next/navigation';
import { useToast } from "@/components/ui/use-toast"
import styles from './resetPassword.module.css';
import Image from 'next/image';
import BannerImage from '@/public/images/user.png';

import {VerificationToken} from '@prisma/client';


interface Props{
    params: VerificationToken | null;
}

const FormSchema = z
  .object({
      newPassword: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });

const ResetPassword = ({params}: Props) => {
  const router = useRouter();
  const {toast} = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const searchParams = useSearchParams();
  // const {token} = searchParams.get('token');

  // if(!params?.token){
  //   toast({
  //     title: "Error",
  //     description: "Token not found in the URL",
  //     variant: "destructive",
  //   })
  //   router.push('/sign-up')
  // }

  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async(values: z.infer<typeof FormSchema>) => {
   try{
    setIsLoading(true);
    const response = await fetch(`/reset-password/${params?.token}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        password: values.newPassword
      })
    })

    const data = await response.json();
if(response.ok){
  // toast({
  //   title: "Success",
  //   description: "Password successfully reset.",
  //   variant: "default",
  // })
  router.push('/sign-in')
}else{
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

  useEffect(() => {
    // You can now call toast here outside the rendering phase
    // Example:
    toast({
      title: "Success",
      description: "Password successfully reset.",
      variant: "default",
    });
  }, [toast]);

  return (
    <div className={`${styles['body-reset']} ${styles['body-content']} container-fluid`}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h1 className={styles.heading}>Create New Password</h1>
          <p className={styles['heading-2']}>Enter your new password</p>
          <div className="card-text">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles['form-style']}>
          <div className='form-group'>
          <FormField
            control={form.control}
            name='newPassword'
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
        <Button disabled={isLoading} className={`btn btn-primary btn-block mt-2 ${styles['create-new-password-btn']}`} type='submit'>
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
      </form>
      {/* <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        or
      </div> */}
      
      {/* <p className='text-center text-sm text-gray-600 mt-2'>
        If you don&apos;t have an account, please&nbsp;
        <Link className='text-blue-500 hover:underline' href='/sign-in'>
          Sign in
        </Link>
      </p> */}
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

export default ResetPassword;
