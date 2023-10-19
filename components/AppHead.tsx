import { FC } from "react";
import { StringLiteralType } from "typescript";

interface Props {
  title?: string;
  desc?: string;
}

export const APP_NAME = "Review App";
export const defaultDesc =
  "A place where you will get an authentic review for all kinds of products";

const AppHead: FC<Props> = ({ title, desc }): JSX.Element => {
  const appTitle = title ? title + " | " + APP_NAME : APP_NAME;

  return (
    <>
      <title>{appTitle}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content={desc || defaultDesc} name="description" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default AppHead;
