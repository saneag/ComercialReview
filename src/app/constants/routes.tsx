import {
  Building,
  LucideLayoutDashboard,
  MessageCircle,
  Settings,
} from 'lucide-react';

import { LinkType } from '@/app/types/LinkType';

export const publicLinks: LinkType[] = [
  {
    label: 'Businesses',
    path: '/businesses',
    icon: <Building size={16} />,
  },
  {
    label: 'Reviews',
    path: '/reviews',
    icon: <MessageCircle size={16} />,
  },
];
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
    label: 'Reviews',
    path: '/dashboard/reviews',
    icon: <MessageCircle size={20} />,
  },
  {
    label: 'Settings',
    path: '/dashboard/settings',
    icon: <Settings size={20} />,
  },
];
