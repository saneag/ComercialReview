import {
  Building,
  FileClock,
  LucideLayoutDashboard,
  MessageCircle,
  Settings,
} from 'lucide-react';

import { LinkType } from '@/app/types/LinkType';

export const publicLinks: LinkType[] = [];
export const privateLinks: LinkType[] = [];
export const adminLinks: LinkType[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LucideLayoutDashboard size={16} />,
  },
];
export const adminLinksDashboard: LinkType[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LucideLayoutDashboard size={20} />,
  },
  {
    label: 'Businesses',
    path: '/dashboard/businesses',
    icon: <Building size={20} />,
  },
  {
    label: 'Settings',
    path: '/dashboard/settings',
    icon: <Settings size={20} />,
  },
  {
    label: 'Logs',
    path: '/dashboard/logs',
    icon: <FileClock size={20} />,
  },
];
