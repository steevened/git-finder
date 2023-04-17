import { Button, Input } from '@material-tailwind/react';
import { SearchIcon } from './Svgs';
import { useRouter } from 'next/router';
import { FC, FormEvent, useState } from 'react';

interface Props {
  setOpenNav: (open: boolean) => void;
}

const SearchInput: FC<Props> = ({ setOpenNav }) => {
  const router = useRouter();
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: { q: text },
    });

    setText('');
    setOpenNav(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex w-full max-w-[24rem]"
    >
      <Input
        type="text"
        label="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        // value={email}
        // onChange={onChange}
        className="relative pr-20 dark:border-blue-gray-800 dark:focus:border-blue-500 dark:focus:border-t-0 dark:text-blue-gray-200"
        containerProps={{
          className: 'min-w-0',
        }}
      />
      <Button
        size="sm"
        type="submit"
        disabled={!text}
        // color={email ? 'blue' : 'blue-gray'}
        // disabled={!email}

        className="!absolute right-1 top-1 rounded"
      >
        <SearchIcon />
        {/* search */}
      </Button>
    </form>
  );
};

export default SearchInput;
