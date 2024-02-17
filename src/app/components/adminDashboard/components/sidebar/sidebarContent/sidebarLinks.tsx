import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { adminLinksDashboard } from '@/app/constants/routes';

export default function SidebarLinks() {
  const pathname = usePathname();

  return (
    <ul className='space-y-3'>
      {adminLinksDashboard.map((link) => (
        <li key={link.label}>
          <Link
            href={pathname !== link.path ? link.path : ''}
            className={`flex items-center gap-2 whitespace-nowrap rounded-md p-1 hover:bg-gray-100 ${
              pathname === link.path ? 'bg-gray-100' : 'text-gray-500'
            }`}
          >
            {link?.icon}
            <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
