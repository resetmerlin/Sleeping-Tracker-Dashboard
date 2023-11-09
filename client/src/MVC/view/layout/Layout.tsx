import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <main id="container">{children}</main>;
}
