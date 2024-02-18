import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { adminLinksDashboard } from '@/app/constants/routes';

interface SidebarLinkProps {
  setIsSidebarOpen: (value: boolean) => void;
  includeLabel?: boolean;
}

export default function SidebarLinks({
  setIsSidebarOpen,
  includeLabel = true,
}: SidebarLinkProps) {
  const pathname = usePathname();

  return (
    <ul className='space-y-3'>
      {adminLinksDashboard.map((link) => (
        <li key={link.label}>
          <Link
            href={pathname !== link.path ? link.path : ''}
            className={`flex items-center gap-2 whitespace-nowrap rounded-md 
            p-1 hover:bg-gray-100 ${
              pathname === link.path ? 'bg-gray-100' : 'text-gray-500'
            } ${includeLabel ? '' : 'justify-center'}`}
            onClick={() => setIsSidebarOpen(false)}
          >
            {link?.icon}
            {includeLabel && <span>{link.label}</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
