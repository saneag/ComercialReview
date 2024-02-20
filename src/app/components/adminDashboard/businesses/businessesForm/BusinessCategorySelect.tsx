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
          <FormLabel>
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
                <SelectTrigger>
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
