import { Button, Input } from '@material-tailwind/react';
import { SearchIcon } from './Svgs';

const SearchInput = () => {
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Search"
        // value={email}
        // onChange={onChange}
        className="relative pr-20 dark:border-blue-gray-800 dark:focus:border-blue-500 dark:focus:border-t-0"
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Button
        size="sm"
        // color={email ? 'blue' : 'blue-gray'}
        // disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        <SearchIcon />
        {/* search */}
      </Button>
    </div>
  );
};

export default SearchInput;
