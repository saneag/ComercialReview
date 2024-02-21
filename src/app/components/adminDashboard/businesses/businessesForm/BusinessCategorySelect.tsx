import { useFormContext } from 'react-hook-form';

import RequiredFieldStar from '@/app/components/RequiredFieldStar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  categoryFilterArray,
  CategoryFilterEnum,
} from '@/app/types/enums/CategoryFilterEnum';

export default function BusinessCategorySelect() {
  const form = useFormContext();

  return (
    <FormField
      name='category'
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-lg text-gray-500'>
            <span>Category</span> <RequiredFieldStar />
          </FormLabel>
          <Select
            onValueChange={(value) => {
              field.onChange(Number(value));
            }}
            defaultValue={field.value}
          >
            <FormControl>
              <>
                <SelectTrigger className='w-full nm-flat-white-sm focus-visible:ring-1 focus-visible:ring-blue-500'>
                  <SelectValue placeholder='Select a business category from dropdown' />
                </SelectTrigger>
                <SelectContent>
                  {categoryFilterArray
                    .filter((it) => it.value !== CategoryFilterEnum.ALL)
                    .map((category) => (
                      <SelectItem
                        key={category.value}
                        value={String(category.value)}
                      >
                        {category.label}
                      </SelectItem>
                    ))}
                </SelectContent>
              </>
            </FormControl>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
