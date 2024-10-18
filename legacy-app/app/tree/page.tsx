"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Box } from "@chakra-ui/react";

const Tree = dynamic(() => import("react-d3-tree"), {
  ssr: false,
});

// interface TreeNode {
//   name: string;
//   children: TreeNode[];
// }

export default function TreePage() {
  // const [tree, setTree] = useState<TreeNode>({
  //   name: "Root",
  //   children: [],
  // });

  const tree = { name: "Root", children: [] };
  // const addNode = () => {
  //   const newNode: TreeNode = {
  //     name: "Node",
  //     children: [],
  //   };

  //   const newTree = { ...tree };
  //   newTree.children.push(newNode);
  //   setTree(newTree);
  // };

  return (
    <Box h="100vh" w="100vw">
      <Tree data={tree} />
    </Box>
  );
}
