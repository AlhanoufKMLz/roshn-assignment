import { Post } from "../types/types";

export default function (prop: {postsToDisplay: Post[]}) {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {prop.postsToDisplay.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
