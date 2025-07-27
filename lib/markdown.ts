import { promises as fs } from "fs";
import path from "path";

export async function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), "content", filename);
  try {
    const content = await fs.readFile(filePath, "utf8");
    return content;
  } catch (error) {
    console.error(`Error reading markdown file: ${filename}`, error);
    return "";
  }
}
