# Node cloud address

Modify address template attribute using Node.js in cloud.tencent.com.

## Api doc

[ModifyAddressTemplateAttribute](https://console.cloud.tencent.com/api/explorer?Product=vpc&Version=2017-03-12&Action=ModifyAddressTemplateAttribute&SignVersion=)

## Usage

```bash
# shell
$ sh app.sh

# node
$ npm run start
```

### Daily Task

```bash
$ crontab -e
```

```bash
# /etc/cron

30 1 * * * cd ~/workspace/node/node-cloud-address && sh app.sh >/dev/null 2>&1
```
