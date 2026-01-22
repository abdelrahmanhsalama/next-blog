import { Article } from "./types";

export async function getRecentPosts(
  limit: number
): Promise<{ posts: Article[] }> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch posts!");

  const posts = await res.json();
  return { posts };
}

export async function getAllPosts(
  page: number,
  limit: number
): Promise<{ posts: Article[]; total: number }> {
  const start = 4 + (page - 1) * limit;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) throw new Error("Failed to fetch posts!");

  const posts = await res.json();
  const total = Number(res.headers.get("x-total-count"));
  return { posts, total };
}

export async function getPost(id: string): Promise<Article> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Post not found!");
  return res.json();
}
