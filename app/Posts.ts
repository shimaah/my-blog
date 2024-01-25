export type PostType = {
  id: string;
  title: string;
  content?: string;
};

let posts: PostType[] = [];
for (let i = 1; i <= 30; i++) {
  posts.push({
    id: i.toString(),
    title: `This is my post title - more details`,
    content: `Hi, this is my post # ${i} so you can view more details here`,
  });
}

export const PostsList = posts;
