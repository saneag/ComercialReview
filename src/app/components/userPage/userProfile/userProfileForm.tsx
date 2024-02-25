'use client';

import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/app/components/ui/form';
import UserProfileAvatar from '@/app/components/userPage/userProfile/userProfileAvatar';
import { useAppSelector } from '@/app/redux/store';
import { UserFormSchemaState } from '@/app/types/user/UserSchemaType';
import { userFormSchema } from '@/app/utils/formValidations/userFormSchema';

export default function UserProfileForm() {
  const user = useAppSelector((state) => state.user.user);

  const form = useForm<UserFormSchemaState>({
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      userName: user?.userName,
      avatar: user?.avatar,
    },
    mode: 'onChange',
    resolver: zodResolver(userFormSchema),
  });

  const onSubmit = (data: UserFormSchemaState) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <UserProfileAvatar />
        </form>
      </Form>
    </FormProvider>
  );
}
