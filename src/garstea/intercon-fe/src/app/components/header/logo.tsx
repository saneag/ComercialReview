import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/reviews'>
      <Image
        src='/assets/images/intercon-logo-no-text.png'
        width={40}
        height={40}
        alt=''
        priority
        className='h-auto w-auto'
      />
    </Link>
  );
}
