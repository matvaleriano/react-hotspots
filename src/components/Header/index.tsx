import React, { memo } from 'react';
import { Box, Flex, Link, Heading } from 'rebass';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from 'styled-icons/boxicons-logos/Twitter';

const Header: React.FC = () => (
  <Flex fontSize={3} p={3} alignItems="center">
    <Box flex={'1 1 auto'}>
      <Heading fontSize={[3, 4, 5]} as="h1">
        Hotspots
      </Heading>
    </Box>
    <Box px={1}>
      <Link
        href="https://github.com/mathvaleriano/react-hotspots"
        target="_blank"
      >
        <Github style={{ width: '2rem', color: 'black' }} />
      </Link>
    </Box>
    <Box px={1}>
      <Link href="https://www.linkedin.com/in/mathvaleriano/" target="_blank">
        <LinkedinSquare style={{ width: '2rem', color: 'black' }} />
      </Link>
    </Box>
    <Box px={1}>
      <Link href="https://twitter.com/mathvaleriano" target="_blank">
        <Twitter style={{ width: '2rem', color: 'black' }} />
      </Link>
    </Box>
  </Flex>
);

export default memo(Header);
