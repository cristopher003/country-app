// npm install dotenv --save

const {  mkdirSync, writeFileSync } = require('fs');

require('dotenv').config();

const targetPath="./src/environments/environments.ts";
const envFileContent=`
export const environment={
  production: ${process.env.PRODUCTION === 'true'},
  apiUrl: '${process.env.API_URL}',
};
`

mkdirSync('./src/environments',{recursive:true});

writeFileSync(targetPath,envFileContent);