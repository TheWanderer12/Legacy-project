'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

const Tree = dynamic(() => import('react-d3-tree'), {
  ssr: false,
});

export default function TreePage() {
  const [tree, setTree] = useState({
    name: 'Root',
    children: [],
  });
  return (
    <Box h="100vh" w="100vw">
      <Tree data={tree} />
    </Box>
  );
}