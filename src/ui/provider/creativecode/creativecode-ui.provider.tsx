import { Fragment, type PropsWithChildren, useEffect } from 'react';

export interface CreativeCodeUIProviderType extends PropsWithChildren {
  theme?: string;
}

const CreativeCodeUIProvider = ({
  children,
  theme = 'creativecode'
}: CreativeCodeUIProviderType) => {
  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', theme);
  }, [theme]);

  return <Fragment>{children}</Fragment>;
};

export default CreativeCodeUIProvider;
