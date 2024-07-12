'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
   
    <label className=''>
      
      <p className='sr-only'>Change Language</p>
      <select
        defaultValue={localActive}
        className=' bg-transparent '
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>EN</option>
        <option value='jp'>JP</option>
      </select>
    </label>
  
  );
}