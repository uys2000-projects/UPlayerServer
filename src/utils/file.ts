import http from "http";
import request from "request";
export const getFile = function (url: string) {
  return new Promise((resolve, reject) => {
    const writeMessage = (message: http.IncomingMessage) => {
      let data: any[] = [];
      message.on("data", (chunk) => data.push(chunk));
      message.on("end", () => {
        console.log(`Data read endded data length:${data.length}`);
        resolve(Buffer.concat(data).toString());
      });
    };
    http.get(url, writeMessage);
  });
};

export const getFileRequest = function (url: string) {
  return new Promise((resolve, reject) => {
    console.log(`Request to url: ${url}`);
    request.get(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(`Result Data Length:${body.length} from url: ${url}`);
        return resolve(body);
      }
      console.log(`Error from url: ${url}`);
      return reject(error);
    });
  });
};
