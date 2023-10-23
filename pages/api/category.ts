import { NextApiHandler } from "next";
import fs from "fs";
import path from "path";

const handler: NextApiHandler = (req, res) => {
  const { name } = req.query as { name: string };

  const jsonRes = fs.readFileSync(
    path.join(process.cwd(), "data/categories.json"),
    "utf-8"
  );

  const categories = JSON.parse(jsonRes);
  res.json({ product_category: categories[name] });
};

export default handler;
