
export async function addPost({
  id,
  headline,
  text,
}) {
  const { Blog, Post } = this.model;
  const timestamp = new Date(this.timestamp).toISOString();
  const viewer = this.viewer;

  const blog = Blog.node(id);
  if (!await blog.exists()) {
    throw new Error('Blog does not exist');
  }

  const post = await Post.addNode({ timestamp, headline, text });
  await blog.posts.addEdge(post);

  return { post, blog, viewer };
}
