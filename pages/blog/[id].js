import { getBlogPosts, getPostPreviewData, withAuthor } from '../../blog/util';
import PostPage from '../../components/Blog/PostPage';

export default PostPage;

export async function getStaticPaths() {
  const posts = await getBlogPosts();

  return {
    paths: posts.map((p) => ({
      params: { id: p.href },
    })),
    fallback: false,
  };
}

const RELATED_POSTS_COUNT = 4;

export async function getStaticProps({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((p) => p.href === params.id);
  const idx = posts.findIndex((p) => p.href === post.href);
  let relatedPosts = posts
    .filter((p, i) => i > idx)
    .slice(0, RELATED_POSTS_COUNT);

  if (relatedPosts.length < RELATED_POSTS_COUNT) {
    const len = RELATED_POSTS_COUNT - relatedPosts.length;
    for (let i = 0; i < len; i++) {
      relatedPosts.push(posts[i]);
    }
  }

  return {
    props: {
      post: {
        ...post,
        ...withAuthor(post),
      },
      relatedPosts: relatedPosts.map(getPostPreviewData),
    },
  };
}
