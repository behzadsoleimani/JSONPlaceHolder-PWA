import React, { useEffect, useState } from "react";
import { AppItems } from "../Context/state";
import ClipLoader from "react-spinners/ClipLoader";
import Comment from "./comment";
import { Pagination } from "react-bootstrap";

const Comments = ({ match }: any) => {
  const [active, setActive] = useState(1);
  const items = [];

  const { comments, getComments }: any = AppItems();
  const { params } = match;
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    await getComments(params.id);
  };

  for (let number = 1; number <= comments.length; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="parent-comment">
      {comments && comments.length ? (
        <>
          <Comment
            body={comments[active - 1].body}
            name={comments[active - 1].name}
          />
          <Pagination className="paginations" size="lg">
            {items}
          </Pagination>
        </>
      ) : (
        <ClipLoader loading={true} size={150} />
      )}
    </div>
  );
};

export default Comments;
