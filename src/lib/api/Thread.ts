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
}
export default Thread;
