import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Post({ title, id }: any) {
  return (
    <div>
      <Card style={{ width: "18rem", height: "15rem", margin: "10px" }}>
        <Card.Body className={"card-body-com"}>
          <Card.Title>{title}</Card.Title>

          <Link className={"card-comments"} to={"/comments/" + id}>
            <span>Comments</span>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
