import { NextResponse } from "next/server";
import fs from "node:fs";

export const GET = async () => {
  const img = fs.readFileSync("./1.png");
  return new NextResponse(img);
};
