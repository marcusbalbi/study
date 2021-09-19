import axios, { AxiosPromise } from "axios";

interface hasId {
  id?: number;
}

export class Sync<T extends hasId> {
  constructor(protected rootURL: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootURL}/${id}`, data);
    }
    return axios.post(this.rootURL, data);
  }
}
