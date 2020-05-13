import React, { memo } from 'react';
import { Box, Flex, Link, Heading } from 'rebass';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from 'styled-icons/boxicons-logos/Twitter';

const LINKS = [
  {
    href: 'https://github.com/mathvaleriano/react-hotspots',
    icon: Github,
    testId: 'github-link',
  },
  {
    href: 'https://www.linkedin.com/in/mathvaleriano/',
    icon: LinkedinSquare,
    testId: 'linkedin-link',
  },
  {
    href: 'https://twitter.com/mathvaleriano',
    icon: Twitter,
    testId: 'twitter-link',
  },
];

const Header: React.FC = () => (
  <Flex fontSize={3} p={3} alignItems="center">
    <Box flex={'1 1 auto'}>
      <Heading fontSize={[3, 4, 5]} as="h1" data-testid="heading" style={{ color: 'red' }}>
        Hotspots
      </Heading>
    </Box>
    {LINKS.map(({ href, icon: Icon, testId }) => (
      <Box px={1} key={testId}>
        <Link data-testid={testId} href={href} target="_blank">
          <Icon style={{ width: '2rem', color: 'black' }} />
        </Link>
      </Box>
    ))}
  </Flex>
);

export default memo(Header);
