import { Fragment, PropsWithChildren, useEffect } from 'react';

import '@creativecodeco/ui/lib/theme/css/main.css';

export default function CreativeCodeUIProvider({
  children
}: PropsWithChildren<unknown>): JSX.Element {
  useEffect(() => {
    const html = document.querySelector('html');
    html?.setAttribute('data-theme', 'creativecode');
  }, []);

  return <Fragment>{children}</Fragment>;
}
