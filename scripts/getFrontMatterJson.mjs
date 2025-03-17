import fs from "fs";
import path from "path";
import matter from "gray-matter";

const markdownDir = path.join(process.cwd(), "projects");
const markdownFiles = fs.readdirSync(markdownDir, { withFileTypes: true })
  .flatMap((dirent) => {
    const res = path.resolve(markdownDir, dirent.name);
    return dirent.isDirectory() ? fs.readdirSync(res).map((file) => path.join(dirent.name, file)) : dirent.name;
  })
  .filter((file) => file.endsWith(".md"));

const frontMatterJson = markdownFiles.map((file) => {
  const markdownWithFrontMatter = fs.readFileSync(
    path.join(markdownDir, file),
    "utf8",
  );
  const { data } = matter(markdownWithFrontMatter);
  return { ...data, filePath: file.replace(".md", "") };
});

fs.writeFileSync(
  path.join(process.cwd(), "static/frontMatter.json"),
  JSON.stringify(frontMatterJson, null, 2),
);
