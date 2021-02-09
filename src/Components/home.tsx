import React, { useEffect } from "react";
import { AppItems } from "../Context/state";
import ClipLoader from "react-spinners/ClipLoader";
import User from "./user";
import styled from "styled-components";

function Home() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;
  const { users, getUsers }: any = AppItems();
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await getUsers();
  };

  return (
    <div>
      <Title>Users :</Title>
      {users && users.length ? (
        users.map((itm: any, index: number) => (
          <User name={itm.name} key={index} id={itm.id} />
        ))
      ) : (
        <ClipLoader loading={true} size={150} />
      )}
    </div>
  );
}

export default Home;
