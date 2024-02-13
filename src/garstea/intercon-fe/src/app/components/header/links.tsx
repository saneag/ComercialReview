import Link from 'next/link';

import { adminLinks, privateLinks, publicLinks } from '@/app/constants/routes';
import { useAppSelector } from '@/app/redux/store';
import { UserRoleEnum } from '@/app/types/enums/UserRoleEnum';

export default function Links() {
  const isAuth = useAppSelector((state) => state.user.isAuth);
  const role = useAppSelector((state) => state.user.role);

  return (
    <div className='flex gap-2'>
      <div className='flex gap-2'>
        {publicLinks.map((link) => (
          <Link key={link.label} href={link.path}>
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
      {isAuth && (
        <div className='flex gap-2'>
          {privateLinks.map((link) => (
            <Link key={link.label} href={link.path}>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      )}
      {role === UserRoleEnum.ADMIN ||
        (role === UserRoleEnum.SUPER_ADMIN && (
          <div className='flex gap-2'>
            {adminLinks.map((link) => (
              <Link key={link.label} href={link.path}>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        ))}
    </div>
  );
}
