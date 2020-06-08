import getClient from "./client";
import getQueryString from "../getQueryString";
import parseError from "./parseError";

class Thread {
  private static client = getClient({ auth: true });

  public static async getThreadList(obj: {
    type: string;
    limit?: number;
    page?: number;
  }) {
    const qs = "?" + getQueryString(obj);

    try {
      const data = await this.client.get("/thread" + qs);
      return data.data.data;
    } catch (e) {
      throw parseError(e);
    }
  }
}
export default Thread;
