'use client';

import React from 'react';
import ErrorImage from '@/public/images/Error.png';
import { Button } from '../components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import styles from  './errorPage.module.css';


const NotFoundPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRetry = async () => {
    try {
      setIsLoading(true);

      // Use router.push to navigate to the desired page
       router.push('/');


    } catch (err) {
      console.error('Error during navigation:', err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["body-content"]}>
      <div className={styles.container}>
        <div className={styles.popup}>
        <div className="mx-auto flex items-center justify-center"> {/* Center horizontally and vertically */}
            <Image className={`block mx-auto ${styles.imageStyle}` } src={ErrorImage} alt="Error Image" />
          </div>
          <h2>Oops! Page Not Found</h2>
        <p>Could not find requested resource</p>
          <div className={styles.btn}>
            <Button className={styles.buttonStyle} disabled={isLoading} type="button" onClick={handleRetry}>
              {isLoading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2 animate-spin"
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              )}
              Return Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
