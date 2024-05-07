'use client';

import { useState } from 'react';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

import Links from '@/app/components/header/Links';
import UserDropdown from '@/app/components/header/UserDropdown';
import HomeLogoLink from '@/app/components/HomeLogoLink';

export default function Header() {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (previous) {
      if (latest > previous && latest > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  return (
    <motion.div
      variants={{
        hidden: { y: -300 },
        visible: { y: 0 },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      initial={{ y: 0 }}
      className='sticky top-0 z-10 flex h-16 w-full items-center justify-between px-5 transition-transform nm-flat-white'
    >
      <HomeLogoLink className='w-12' />
      <div>
        <Links />
      </div>
      <UserDropdown />
    </motion.div>
  );
}
