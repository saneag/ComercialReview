import Link from 'next/link';

interface LinkType {
  label: string;
  path: string;
  icon: string;
}

export default function Links() {
  const publicLinks: LinkType[] = [];
  const privateLinks: LinkType[] = [];
  const adminLinks: LinkType[] = [];

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
