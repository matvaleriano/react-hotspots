import React, { memo } from 'react';
import { Box, Flex, Link, Heading } from 'rebass';

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
        GitHub
      </Link>
    </Box>
    <Box px={1}>
      <Link href="https://www.linkedin.com/in/mathvaleriano/" target="_blank">
        LinkedIn
      </Link>
    </Box>
    <Box px={1}>
      <Link href="https://twitter.com/mathvaleriano" target="_blank">
        Twitter
      </Link>
    </Box>
  </Flex>
);

export default memo(Header);
