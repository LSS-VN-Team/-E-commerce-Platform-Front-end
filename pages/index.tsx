/* eslint-disable @next/next/no-page-custom-font */
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/');
        } else {
            router.push('/auth/login');
        }
    }, []);
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    </main>
  )
}
