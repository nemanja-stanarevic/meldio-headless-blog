
export async function addBlog({
  name,
  description,
}) {
  const { Blog } = this.model;
  const viewer = this.viewer;

  const blog = await Blog.addNode({ name, description });
  await viewer.blogs.addEdge(blog);

  return { blog, viewer };
}
