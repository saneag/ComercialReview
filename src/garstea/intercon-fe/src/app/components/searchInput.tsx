import { useCallback } from 'react';

import debounce from 'lodash.debounce';
import { X } from 'lucide-react';

import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface SearchInputProps {
  search: string;
  setSearch: (value: string) => void;
  onSearch: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function SearchInput({
  search,
  setSearch,
  onSearch,
  className,
  placeholder,
}: SearchInputProps) {
  const handleInputChange = (value: string) => {
    setSearch(value);
    debouncedSearch(value);
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 400),
    []
  );

  const handleClearSearch = () => {
    setSearch('');
    debouncedSearch('');
  };

  return (
    <div className='relative w-full'>
      <Input
        className={className}
        placeholder={placeholder || 'Search ...'}
        value={search}
        onChange={({ target }) => {
          handleInputChange(target.value);
        }}
      />
      {search && (
        <Button
          type='button'
          variant='ghost'
          className='absolute right-2 top-2.5 h-5 p-0'
          onClick={handleClearSearch}
        >
          <X />
        </Button>
      )}
    </div>
  );
}
