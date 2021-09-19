import axios, { AxiosPromise } from "axios";

export class Sync<T> {
  constructor(protected rootURL: string) {}
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootURL}/${id}`);
  }

  save(data: T): void {
    const { id } = data;
    if (id) {
      axios.put(`${this.rootURL}/${id}`, data);
    } else {
      axios.post(this.rootURL, data);
    }
  }
}
