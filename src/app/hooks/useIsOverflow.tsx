import { MutableRefObject, useLayoutEffect, useState } from 'react';

export const useIsOverflow = (ref: MutableRefObject<null>) => {
  const [isOverflow, setIsOverflow] = useState(false);

  useLayoutEffect(() => {
    if (ref.current) {
      const element = ref.current as HTMLElement;
      setIsOverflow(element.scrollHeight > element.clientHeight);
    }
  }, [ref]);

  return isOverflow;
};
