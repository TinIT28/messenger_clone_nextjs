import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <p className="text-sky-500 text-3xl">
        Hello Messenger!
      </p>
    </div>
  )
}
