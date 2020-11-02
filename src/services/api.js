import axios from "axios";

class BaseApiService {
  #client = axios.create({
    json: true,
    baseURL: `${process.env.VUE_APP_ENDPOINTPATH}/api/`
  });

  async #execute(method, url, { data, params }) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const res = await this.#client({
        method,
        url,
        params,
        data,
        headers
        // withCredentials: true
      });
      return res.data;
    } catch (error) {
      throw error;
    } finally {
    }
  }

  get(url, params = {}) {
    return this.#execute("get", url, params);
  }

  post(url, { data = {}, params = {} }) {
    return this.#execute("post", url, { data, params });
  }

  put(url, { data = {}, params = {} }) {
    return this.#execute("put", url, { data, params });
  }

  delete(url, params = {}) {
    return this.#execute("delete", url, params);
  }

  upload() {}
}

export default new BaseApiService();
