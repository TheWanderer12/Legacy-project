import Image from 'next/image';
import React, { useState } from 'react';
import Tree from 'react-d3-tree';

export default function Home() {
  const [tree, setTree] = useState({
    name: 'Root',
    children: [],
  });
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            {/* Add your list items here */}
          </li>
        </ol>
      </main>
      <div>
        <Tree data={tree} />
      </div>
    </div >
  );
}
