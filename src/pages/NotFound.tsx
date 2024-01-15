import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
      <div>
          <h1 className="big-title">Oops!</h1>
          <h1>
            Sorry we looked everywhere and we can't seem to find the page you're
            looking for.
          </h1>
          <h2>Error code: 404</h2>
          <Link className="button" to={'/'}>
            Go Home
          </Link>
      </div>
  );
}
