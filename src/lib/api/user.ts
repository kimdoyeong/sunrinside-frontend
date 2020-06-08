import getClient from "./client";
import parseError from "./parseError";

const User = {
  async createUser({
    username,
    password,
    name,
    email,
  }: {
    username: string;
    password: string;
    name: string;
    email: string;
  }) {
    try {
      return await getClient().post("/user", {
        username,
        password,
        name,
        email,
      });
    } catch (e) {
      throw parseError(e);
    }
  },
  async checkExists(username: string) {
    try {
      const req = await getClient().get("/user/exists?username=" + username);
      return req.data.data.exists;
    } catch (e) {
      throw parseError(e);
    }
  },
  async auth({ username, password }: { username: string; password: string }) {
    try {
      const req = await getClient().post("/auth", { username, password });
      return req.data.data.token;
    } catch (e) {
      throw parseError(e);
    }
  },
  async verifyCode({ id, code }: { id: string; code: string }) {
    try {
      await getClient().put("/user/" + id + "/email_code?code=" + code);
    } catch (e) {
      throw parseError(e);
    }
  },
};
export default User;
