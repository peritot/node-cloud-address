const path = require("path");
const log4js = require("log4js");

const filename = path.resolve(__dirname, "../logs/app.log");

log4js.configure({
  appenders: {
    file: {
      type: "file",
      filename: filename,
      maxLogSize: 10485760,
      numBackups: 5,
      compress: false,
      encoding: "utf-8",
      layout: {
        type: "pattern",
        pattern: "[%d] [%p] ｜ %m",
      },
    },
  },
  categories: {
    default: {
      appenders: ["file"],
      level: "debug",
    },
  },
});

const logger = log4js.getLogger("cheese");

module.exports = logger;
