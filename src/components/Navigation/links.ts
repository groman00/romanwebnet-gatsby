interface RootType {
  href: string;
  title: string;
  target?: string | undefined;
}

interface IconType {
  symbol: string;
}

export interface LinkItem {
  root: RootType;
  icon: IconType;
}

const links: LinkItem[] = [
  {
    root: {
      href: '/about',
      title: 'About',
    },
    icon: {
      symbol: 'about',
    },
  },
  {
    root: {
      href: '/recipes',
      title: 'Recipes',
    },
    icon: {
      symbol: 'recipes',
    },
  },
  {
    root: {
      href: '/music',
      title: 'Music',
    },
    icon: {
      symbol: 'music',
    },
  },
  {
    root: {
      href: '/photos',
      title: 'Photos',
    },
    icon: {
      symbol: 'photos',
    },
  },
];

export const socialLinks: LinkItem[] = [
  {
    root: {
      href: 'https://github.com/groman00',
      title: 'Github',
      target: '_blank',
    },
    icon: {
      symbol: 'github',
    },
  },
  {
    root: {
      href: 'https://www.linkedin.com/in/gregory-roman-8486485',
      title: 'LinkedIn',
      target: '_blank',
    },
    icon: {
      symbol: 'linkedin',
    },
  },
  {
    root: {
      href: 'mailto:gregorymichaelroman@gmail.com',
      title: 'Email',
    },
    icon: {
      symbol: 'email',
    }
  },
]

export default links;