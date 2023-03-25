const getUserPosts = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  if (!response.ok) throw new Error('Ups ! :(, Some error fetching User Posts');

  return response.json();
};
export default getUserPosts;
