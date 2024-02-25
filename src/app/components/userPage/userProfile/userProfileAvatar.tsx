import ImageInputFormField from '@/app/components/formFields/ImageInputFormField';
import { useAppSelector } from '@/app/redux/store';

export default function UserProfileAvatar() {
  const user = useAppSelector((state) => state.user.user);

  return (
    <div>
      <ImageInputFormField
        label='avatar'
        displayLabel='User Avatar'
        className='flex flex-col items-center text-center'
      />
    </div>
  );
}
