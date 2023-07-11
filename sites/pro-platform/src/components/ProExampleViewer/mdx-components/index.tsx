import React from 'react';
import { Link, List, OrderedList, Icon, Heading, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { MDXComponents } from 'mdx/types';

import CodeBlock from './CodeBlock';
import FileLink from './FileLink';

export const mdxComponents: MDXComponents = {
  p: (props) => <p className="text-lg" {...props} />,
  // ul: (props) => (
  //   <List pl={2} lineHeight="1.4" color="gray.700" fontSize="md" {...props}>
  //     {props.children}
  //   </List>
  // ),
  // ol: (props) => (
  //   <OrderedList pl={2} lineHeight="1.4" color="gray.700" fontSize="md" {...props}>
  //     {props.children}
  //   </OrderedList>
  // ),
  h1: (props) => <h1 {...props} />,
  h2: (props) => <h2 className="text-2xl" {...props} />,
  // h2: (props) => (
  //   <Heading fontSize="2xl" mb={4} mt={8}>
  //     {props.children}
  //   </Heading>
  // ),
  // h3: (props) => <Heading fontSize="lg">{props.children}</Heading>,
  // h4: (props) => <Heading fontSize="md">{props.children}</Heading>,
  // a: (props) => {
  //   const isExternal = props?.href?.startsWith('https');
  //   const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  //   return (
  //     <Link color="pink.500" {...externalProps} {...props}>
  //       {isExternal && <Icon verticalAlign="text-top" as={ExternalLinkIcon} />}
  //       {props.children}
  //     </Link>
  //   );
  // },
  pre: CodeBlock,
  FileLink: FileLink,
};

export default mdxComponents;