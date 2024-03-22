'use client';

import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import ImageInputFormField from '@/app/components/formFields/ImageInputFormField';
import InputFormField from '@/app/components/formFields/InputFormField';
import { Button } from '@/app/components/ui/button';
import { Form } from '@/app/components/ui/form';
import { setUserAfterUpdate } from '@/app/redux/features/slices/userSlice';
import {
  useGetUserQuery,
  useLazyGetUserQuery,
  useUpdateUserMutation,
} from '@/app/redux/features/userApi/userApi';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { UserFormSchemaState } from '@/app/types/user/UserSchemaType';
import { userFormSchema } from '@/app/utils/formValidations/userFormSchema';

export default function UserProfileForm() {
  const dispatch = useAppDispatch();
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useAppSelector((state) => state.user.user);
  const [trigger, { data: userData }] = useLazyGetUserQuery();

  const [isEdit, setIsEdit] = useState(false);

  const form = useForm<UserFormSchemaState>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      avatar: {
        data: '',
      },
    },
    mode: 'onChange',
    resolver: zodResolver(userFormSchema),
  });

  useEffect(() => {
    if (user && user.userId) {
      trigger(user.userId);
    }
  }, [trigger, user]);

  useEffect(() => {
    if (userData) {
      form.reset({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        userName: userData.userName,
        avatar: userData.avatar,
      });
    }
  }, [userData, form]);

  const onSubmit = async (data: UserFormSchemaState) => {
    try {
      await updateUser({
        userId: Number(user?.userId),
        body: data,
      });

      dispatch(
        setUserAfterUpdate({
          user: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            avatar: data.avatar,
          },
        })
      );

      setIsEdit(false);
    } catch (error) {}
  };

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col items-center gap-4'
        >
          <div className='flex w-full flex-col items-center gap-10'>
            <div className='w-60'>
              <ImageInputFormField
                label='avatar'
                displayLabel='User Avatar'
                className='flex flex-col items-center text-center'
                isDisabled={!isEdit}
              />
            </div>
            <div className='w-full max-w-[300px] space-y-4'>
              <InputFormField
                label='firstName'
                displayLabel='First Name'
                isRequired
                isDisabled={!isEdit}
              />
              <InputFormField
                label='lastName'
                displayLabel='Last Name'
                isRequired
                isDisabled={!isEdit}
              />
              <InputFormField
                label='email'
                displayLabel='Email'
                isRequired
                isDisabled={!isEdit}
              />
              <InputFormField
                label='userName'
                displayLabel='User Name'
                isDisabled={!isEdit}
              />
            </div>
          </div>
          <div className='space-x-2'>
            {isEdit ? (
              <>
                <Button
                  className='bg-green-500 hover:bg-green-600'
                  type='submit'
                  key='submit'
                >
                  Save
                </Button>
                <Button
                  type='button'
                  variant='destructive'
                  key='cancel'
                  onClick={() => {
                    setIsEdit(false);
                    form.reset();
                  }}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                className='bg-blue-500 hover:bg-blue-600'
                type='button'
                key='edit'
                onClick={() => setIsEdit(true)}
              >
                Edit
              </Button>
            )}
          </div>
        </form>
      </Form>
    </FormProvider>
  );
}
