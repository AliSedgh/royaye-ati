function createUrl(endPoint: string) {
  return `${process.env.BASE_URL}/${endPoint}`;
}

async function get<T>(endPoint: string): Promise<T> {
  return fetch(createUrl(endPoint), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export default get;
