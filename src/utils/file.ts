import http from "http";
import request from "request";
export const getFile = function (url: string) {
  return new Promise((resolve, reject) => {
    const writeMessage = (message: http.IncomingMessage) => {
      let data: any[] = [];
      message.on("data", (chunk) => {
        console.log(chunk.toString());
        data.push(chunk);
      });
      message.on("end", () => {
        console.log(`Data read endded data length:${data.length}`);
        resolve(Buffer.concat(data).toString());
      });
    };
    http.get(url, writeMessage);
  });
};
