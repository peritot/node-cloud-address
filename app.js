require("dotenv").config();

const moment = require("moment");
const publicIp = require("public-ip");
const client = require("./utils/client");
const logger = require("./utils/logger");

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
        AddressTemplateId: process.env.ADDRESS_TEMPLATE_ID,
        AddressTemplateName: process.env.ADDRESS_TEMPLATE_NAME,
      };
      const data = await client.ModifyAddressTemplateAttribute(params);

      logger.info(`修改 IP 成功, RequestId: ${data.RequestId}`);
    } catch (error) {
      logger.error(`修改 IP 失败, Error: ${error.message}`);
    }
  }
};

main();
