import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";

interface IProps {
  name?: string;
  id?: any;
  key?: any;
}

function User({ name, id }: IProps) {
  return (
    <div>
      <Link to={"/posts/" + id}>
        <Badge pill variant={id % 2 === 0 ? "success" : "warning"}>
          {name}
        </Badge>
      </Link>
    </div>
  );
}

export default User;
