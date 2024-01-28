import { Home, UserRoundCog } from 'lucide-react';

interface Route {
  path: string;
  title: string;
  protected: boolean;
  icon: JSX.Element;
}

export const routes: Route[] = [
  {
    path: '/reviews',
    title: 'Home',
    protected: false,
    icon: <Home />,
  },
  {
    path: '/reviews/dashboard',
    title: 'Dashboard',
    protected: true,
    icon: <UserRoundCog />,
  },
];
