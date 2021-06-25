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

export default [
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
      href: '/recipes',
      title: 'Recipes',
    },
    icon: {
      symbol: 'recipes',
    },
  },
  {
    root: {
      href: '/cocktails',
      title: 'Cocktails',
    },
    icon: {
      symbol: 'cocktails',
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
  // {
  //   root: {
  //     href: 'mailto:gregorymichaelroman@gmail.com',
  //     title: 'Email',
  //   },
  //   icon: {
  //     symbol: 'email',
  //   }
  // },
];
