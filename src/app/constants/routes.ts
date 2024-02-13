interface LinkType {
  label: string;
  path: string;
  icon?: string;
}

export const publicLinks: LinkType[] = [];
export const privateLinks: LinkType[] = [];
export const adminLinks: LinkType[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
  },
];
