"use client";

import { APP_NAME } from "@/components/AppHead";
import { NextPage } from "next";
import { useEffect } from "react";

interface Props {
  params: { subCategory: string };
}

const ElectronicSubCat: NextPage<Props> = ({ params }) => {
  const { subCategory } = params;

  useEffect(() => {
    document.title = subCategory + " | " + APP_NAME;
  }, []);
  return <div>ElectronicSubCat: {subCategory} </div>;
};

export default ElectronicSubCat;
