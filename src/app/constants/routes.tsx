import { ReactNode } from 'react';

import {
  Building,
  LucideLayoutDashboard,
  MessageCircle,
  Settings,
} from 'lucide-react';

interface LinkType {
  label: string;
  path: string;
  icon?: ReactNode;
}

export const publicLinks: LinkType[] = [];
export const privateLinks: LinkType[] = [];
export const adminLinks: LinkType[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
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
    icon: <Settings />,
  },
];
