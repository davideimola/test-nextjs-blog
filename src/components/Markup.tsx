import React from "react";

type Props = {
  children?: React.ReactNode;
};

export default function Markup({ children }: Props) {
  return <div className="prose mt-4 text-white lg:prose-base">{children}</div>;
}
