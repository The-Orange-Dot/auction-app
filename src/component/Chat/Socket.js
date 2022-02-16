import React from "react";
import { io } from "socket.io-client";

export const Socket = () => {
  const socket = io("https://boiling-forest-19458.herokuapp.com/");

  return <div>Socket</div>;
};
