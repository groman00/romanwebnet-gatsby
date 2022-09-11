import React, { PropsWithChildren } from 'react';

const CardList: React.FC<PropsWithChildren> = ({ children }) => (
  <div>{children}</div>
);

export default CardList;
