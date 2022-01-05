const fs = require("fs");
const path = require("path");
const blackList = ["global.scss", "index.scss"];
let fileContent = `@use "./global.scss";\n`;
const themePath = path.resolve(__dirname, "../src/theme");
let fileNameList = fs.readdirSync(themePath);
//过滤通用样式
function filterFileName(fileNameList) {
  return fileNameList.filter(
    (fileName) => !(blackList.includes(fileName) || fileName.startsWith("_"))
  );
}
//生成index.scss 内容
function generateIndexContent(fileContent, fileNameList) {
  return fileNameList.reduce((content, fileName) => {
    content += `@use "./${fileName}";\n`;
    return content;
  }, fileContent);
}

fileNameList = filterFileName(fileNameList);
fileContent = generateIndexContent(fileContent, fileNameList);
const fsWrite = fs.createWriteStream(themePath + "/index.scss");
fsWrite.write(fileContent, "UTF8");
fsWrite.end();
