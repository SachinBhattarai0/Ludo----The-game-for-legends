import { URL } from "./url";

const createOrVerify = async (mode, roomName, password) => {
  const res = await fetch(`${URL}/create-or-verify/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      mode,
      roomName,
      password,
    }),
  });
  return res;
};
export default createOrVerify;
