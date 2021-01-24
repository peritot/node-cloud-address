const tencentcloud = require("tencentcloud-sdk-nodejs");

const clientConfig = {
  credential: {
    secretId: process.env.CLIENT_SECRET_ID,
    secretKey: process.env.CLIENT_SECRET_KEY,
  },
  region: process.env.CLIENT_REGION,
  profile: {
    httpProfile: {
      endpoint: "vpc.tencentcloudapi.com",
    },
  },
};
const VpcClient = tencentcloud.vpc.v20170312.Client;
const client = new VpcClient(clientConfig);

module.exports = client;
