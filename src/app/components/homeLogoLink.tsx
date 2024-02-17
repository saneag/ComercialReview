import Image from 'next/image';
import Link from 'next/link';

interface HomeLogoLinkProps {
  className?: string;
}

export default function HomeLogoLink({ className }: HomeLogoLinkProps) {
  return (
    <Link href='/businesses' replace={true}>
      <Image
        src='/assets/images/intercon-logo-no-text.png'
        alt=''
        width='0'
        height='0'
        sizes='100vw'
        placeholder='blur'
        blurDataURL='/assets/images/intercon-logo-no-text.png'
        className={`h-auto cursor-pointer ${className}`}
      />
    </Link>
  );
}
