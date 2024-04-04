import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/app/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/app/components/ui/input-otp';

interface OtpInputFieldProps {
  name: string;
}

export default function OtpInputField({ name }: OtpInputFieldProps) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
