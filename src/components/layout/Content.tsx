import { ReactNode } from "react";
import './style.css';

type ContentType = {
  children: ReactNode;
};

export const Content = ({ children }: ContentType) => {
  return <div className="backgroud">{children}</div>;
};
