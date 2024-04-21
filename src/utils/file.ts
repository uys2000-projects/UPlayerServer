import { requestCloudflare } from "request-cloudflare";

export const readFileCloud = function (url: string) {
  console.log("=======================================");
  console.log(url);
  return new Promise((resolve, reject) => {
    requestCloudflare.promises
      .get(url)
      .then((res: string) => {
        console.log("Response length : " + res.length);
        resolve(res);
      })
      .catch(reject);
  });
};
