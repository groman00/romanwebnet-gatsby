import React from 'react';

enum Theme {
  none = 'bg-transparent',
  white = 'bg-white',
  light = 'bg-gray-lightest',
  dark = 'bg-gray-darker',
}

interface Props {
  theme?: keyof typeof Theme;
}

const Panel: React.FC<Props> = ({ children, theme = 'none' }) => (
  <section className={Theme[theme]}>{children}</section>
);

export default Panel;
