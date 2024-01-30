import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/reviews'>
      <Image
        src='/assets/images/intercon-logo.png'
        width={40}
        height={40}
        alt=''
        className='rounded-full'
      />
    </Link>
  );
}
