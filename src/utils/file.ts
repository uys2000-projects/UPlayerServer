import http from "node:http";

export const readFile = function (url: string) {
  console.log("=======================================");
  console.log(url);
  return new Promise((resolve, reject) => {
    http.get(url).on("response", (res) => {
      console.log(`\nResponse Code: ${res.statusCode}`);
      console.log(`Readable :${res.readable}`);
      console.log(`Content Length :${res.headers["content-length"]}`);
      console.log(`Headers :${JSON.stringify(res.headers)}`);
      let chunks: string[] = [];
      if (res.readable) {
        res.on("data", (chunk) => {
          chunks.push(chunk.toString());
        });
        res.on("end", () => {
          const data = chunks.join("\n");
          console.log(`Chunks Count :${chunks.length}`);
          console.log(`Data Length :${data.length}`);
        });
      } else return resolve(res.statusCode);
    });
  });
};
