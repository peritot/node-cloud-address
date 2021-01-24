// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const tencentcloud = require("tencentcloud-sdk-nodejs");
const publicIp = require("public-ip");
const moment = require("moment");
const log4js = require("log4js");

const clientConfig = {
  credential: {
    secretId: "",
    secretKey: "",
  },
  region: "ap-shanghai",
  profile: {
    httpProfile: {
      endpoint: "vpc.tencentcloudapi.com",
    },
  },
};
const VpcClient = tencentcloud.vpc.v20170312.Client;
const client = new VpcClient(clientConfig);

log4js.configure({
  "appenders": {
    "file": {
      "type": "file",
      "filename": "logs/app.log",
      "maxLogSize": 10485760,
      "numBackups": 5,
      "compress": false,
      "encoding": "utf-8",
      "layout": {
        "type": "pattern",
        "pattern": "[%d] [%p] ｜ %m"
      }
    }
  },
  "categories": {
    "default": {
      "appenders": ["file"],
      "level": "debug"
    }
  }
});
const logger = log4js.getLogger("cheese");

const main = async () => {
  let ip;
  try {
    ip = await publicIp.v4();

    logger.info(`获取 IP 成功, IP: ${ip}`);
  } catch (error) {
    logger.error(`获取 IP 失败, Error: ${error}`);
  }

  if (ip) {
    try {
      const time = moment().format("YY.MM.DD.HH");
      const params = {
        Addresses: [ip, time],
        AddressTemplateId: "templateId",
        AddressTemplateName: "templateName",
      };
      const data = await client.ModifyAddressTemplateAttribute(params);

      logger.info(`修改 IP 成功, RequestId: ${data.RequestId}`);
    } catch (error) {
      logger.error(`修改 IP 失败, Error: ${error.message}`);
    }
  }
};

main();
