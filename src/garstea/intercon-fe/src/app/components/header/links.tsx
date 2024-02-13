import Link from 'next/link';

import { adminLinks, privateLinks, publicLinks } from '@/app/constants/routes';

export default function Links() {
  return (
    <div className='flex gap-2'>
      <div className='flex gap-2'>
        {publicLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className='flex gap-2'>
        {privateLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className='flex gap-2'>
        {adminLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
