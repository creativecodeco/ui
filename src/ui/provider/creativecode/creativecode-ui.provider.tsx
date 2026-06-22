import { Fragment, PropsWithChildren, useEffect } from 'react';

export default function CreativeCodeUIProvider({
  children
}: PropsWithChildren<unknown>) {
  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', 'creativecode');
  }, []);

  return <Fragment>{children}</Fragment>;
}
