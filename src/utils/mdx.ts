import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { sync } from "glob";

const articlesPath = path.join(process.cwd(), "articles");

// get unique article, when it is clicked on, by the user
// on the blog page
export async function getSlug() {
  const paths = sync(`${articlesPath}/*.mdx`);

  return paths.map((path) => {
    // holds the paths to the directory of the article
    const parts = path.split("/");
    const fileName = parts[parts.length - 1]; // gets the last part of path with /name.mdx
    const [slug, _extension] = fileName.split(".");

    return slug;
  });
}

export async function getWorkFromSlug(slug: string) {
  
  const articleDir = path.join(articlesPath, `${slug}.mdx`);
  const source = fs.readFileSync(articleDir);
  const { content, data } = matter(source);

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      cover_image: data.cover_image,
      ...data,
    },
  };
}

// get the path that stores all the articles or blog post
export async function getAllWorks() {
  const articles = fs.readdirSync(path.join(process.cwd(), "/articles"));

  return articles.reduce((allArticles: any, articleSlug) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(process.cwd(), "/articles", articleSlug),
      "utf-8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: articleSlug.replace(".mdx", ""),
      },
      ...allArticles,
    ];
  }, []);
}