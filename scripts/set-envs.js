// npm install dotenv --save

const {  mkdirSync, writeFileSync } = require('fs');

require('dotenv').config();

const targetPath="./src/environments/environments.ts";
const envFileContent=`
export const environment={
    api_key:"${process.env['API_KEY']}"
};
`

mkdirSync('./src/environments',{recursive:true});

writeFileSync(targetPath,envFileContent);