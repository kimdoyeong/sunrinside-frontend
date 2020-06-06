import getClient from "./client";
import parseError from "./parseError";

const User = {
  async createUser({
    username,
    password,
    name,
  }: {
    username: string;
    password: string;
    name: string;
  }) {
    try {
      return await getClient().post("/user", { username, password, name });
    } catch (e) {
      throw parseError(e);
    }
  },
};
export default User;
