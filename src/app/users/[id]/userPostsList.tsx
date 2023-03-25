import styles from '../users.module.css';

// type PostsProps = {
//   posts: Post[];
// };

type PostsProps = {
  promise: Promise<Post[]>;
};

// export const UserPostsList = ({ posts }: PostsProps) => {
export const UserPostsList = async ({ promise }: PostsProps) => {
  const posts = await promise;
  return (
    <div>
      <h2>Post del usuario </h2>

      {posts.length > 0 && (
        <>
          {posts.map((post) => {
            return (
              <div key={post.id} className={styles.card1}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
