import { ReactNode } from 'react';

import { toast } from '@/app/components/ui/use-toast';
import { ErrorType } from '@/app/types/ErrorType';

type ToastVariant = 'default' | 'destructive' | null | undefined;

function showToast(
  title: string,
  description: string | ReactNode,
  variant: ToastVariant,
  duration?: number,
  className?: string
) {
  toast({
    title: title,
    description: description,
    duration: duration,
    variant: variant,
    className: `mb-2 ${className ?? ''}`,
  });
}

export function showToastSuccess(description: string, duration?: number) {
  showToast(
    'Success',
    description,
    'default',
    duration,
    'mb-2 bg-green-500 text-white'
  );
}

export function showToastError(
  errors: ErrorType[] | string,
  duration?: number
) {
  const checkErrors = () => {
    if (typeof errors === 'string') {
      return errors;
    } else if (Array.isArray(errors)) {
      return (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error.errorMessage}</li>
          ))}
        </ul>
      );
    }
  };

  showToast(
    'Error',
    <>{checkErrors()}</>,
    'destructive',
    duration,
    'mb-2 bg-red-500 text-white'
  );
}

export function showToastInfo(description: string, duration?: number) {
  showToast(
    'Info',
    description,
    'default',
    duration,
    'mb-2 bg-blue-500 text-white'
  );
}
