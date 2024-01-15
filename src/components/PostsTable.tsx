import { Link } from "react-router-dom";
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
              <td className="number">{post.id}</td>
              <td className="button">{post.userId}</td>
              <td className="text">{post.title}</td>
              <td className="text">{post.body}</td>
              <td><Link to={`/${post.id}`}>see post...</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
