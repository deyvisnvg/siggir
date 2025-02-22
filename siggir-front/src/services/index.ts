import { makeHttpRequest } from "./config";

interface IUpsert {
  id?: string | number;
  body: object | FormData;
  url: string;
}

interface IRead {
  id?: string | number;
  url: string;
  params?: Record<string, string | number>;
}

export async function create({ body, url }: IUpsert) {
  return await makeHttpRequest({ method: "post", url, body });
}

export async function read({ id, url, params }: IRead) {
  return await makeHttpRequest({ method: "get", url, id, params });
}

export async function update({ id, body, url }: IUpsert) {
  return await makeHttpRequest({ method: "put", id, body, url });
}

export async function destroy({ id, url }: IRead) {
  return await makeHttpRequest({ method: "delete", id, url });
}
