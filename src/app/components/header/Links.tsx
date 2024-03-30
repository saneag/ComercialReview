import Link from 'next/link';

import { adminLinks, privateLinks, publicLinks } from '@/app/constants/routes';
import { useAppSelector } from '@/app/redux/store';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';
import { LinkType } from '@/app/types/LinkType';

export default function Links() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const role = useAppSelector((state) => state.user.role);

  return (
    <div className='flex gap-2'>
      <LinkContainer links={publicLinks} />
      {isAuth && <LinkContainer links={privateLinks} />}
      {(role === UserRoleEnum.ADMIN || role === UserRoleEnum.SUPER_ADMIN) && (
        <LinkContainer links={adminLinks} />
      )}
    </div>
  );
}

interface LinkContainerProps {
  links: LinkType[];
}

function LinkContainer({ links }: LinkContainerProps) {
  return (
    <div className='flex gap-3'>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.path}
          className='flex items-center gap-1 transition-colors 
          duration-300 hover:text-gray-500'
        >
          {link.icon && link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
}
