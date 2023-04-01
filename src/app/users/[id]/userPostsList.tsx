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
    <div className="bg-slate-500">
      <h2 className="my-10 text-3xl">Post del usuario </h2>

      {posts.length > 0 && (
        <>
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="max-w-[700px] mx-auto p-4 bg-slate-300 gap-4 my-4 text-black text-left border-b-4 border-b-blue-600 rounded-lg"
              >
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
