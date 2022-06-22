import { URL } from "./url";

const createOrVerify = async (mode, roomName, password, name) => {
  const res = await fetch(`${URL}/create-or-verify/`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      mode,
      roomName,
      password,
      name,
    }),
  });
  return res;
};
export default createOrVerify;
