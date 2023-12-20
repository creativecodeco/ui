import { Fragment, PropsWithChildren } from "react";

export default function CreativeCodeUIProvider({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  return <Fragment>{children}</Fragment>;
}
