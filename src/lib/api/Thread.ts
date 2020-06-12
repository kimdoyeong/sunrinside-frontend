import getClient from "./client";
import getQueryString from "../getQueryString";
import parseError from "./parseError";

class Thread {
  public static async getThreadList(obj: {
    type: string;
    limit?: number;
    page?: number;
  }) {
    const qs = "?" + getQueryString(obj);

    try {
      const data = await getClient({ auth: true }).get("/thread" + qs);
      return data.data.data;
    } catch (e) {
      throw parseError(e);
    }
  }

  public static async getThread(id: string) {
    try {
      const data = await getClient({ auth: true }).get("/thread/" + id);
      return data.data.data;
    } catch (e) {
      throw parseError(e);
    }
  }

  public static async postSubthread(id: string, content: string) {
    try {
      await getClient({ auth: true }).post("/thread/" + id, { content });
    } catch (e) {
      throw parseError(e);
    }
  }

  public static async postThread(title: string, content: string) {
    try {
      const {
        data: {
          data: { id },
        },
      } = await getClient({ auth: true }).post("/thread", { title, content });
      return id;
    } catch (e) {
      throw parseError(e);
    }
  }
}
export default Thread;
