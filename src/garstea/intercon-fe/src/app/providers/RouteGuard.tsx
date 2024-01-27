import NotAuthComponent from '@/app/components/auth/components/notAuthComponent';

export default function RouteGuard(Component: any) {
  return function RouteGuardWrapper(props: any) {
    const isAuth = true;

    if (!isAuth) {
      return <NotAuthComponent />;
    }

    return <Component {...props} />;
  };
}
