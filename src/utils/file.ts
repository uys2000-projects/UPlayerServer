import http from "http";

export const getFile = function (url: string) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data: any[] = [];
        res.on("data", (chunk) => data.push(chunk));
        res.on("end", () => resolve(Buffer.concat(data).toString()));
      })
      .on("error", (err) => reject(err));
  });
};
