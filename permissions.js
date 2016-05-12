
export function permissions() {
  return {
    // Node permissions return 'Nodes' instance that specifies which nodes
    // are accessible to the current viewer

    async User() {
      const { User } = this.model;
      const viewer = this.viewer;

      // users can only view their own profile
      if (viewer) {
        return User.filter({ id: { eq: viewer.id } });
      }
    },

    async Blog() {
      const { Blog } = this.model;
      return Blog.filter({ });
    },

    async Post() {
      const { Post } = this.model;
      return Post.filter({ });
    },

    async addBlog() {
      return true;
    },

    async addPost() {
      return true;
    },

    // mutation permissions return true if viewer is allowed to execute mutation
  };
}
