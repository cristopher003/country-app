const fs = require('fs');
const dotenv = require('dotenv');

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Crear el contenido del archivo environment.ts
const envConfigFile = `export const environment = {
  production: ${process.env.PRODUCTION === 'true'},
  apiUrl: '${process.env.API_URL}',
  otherVariable: '${process.env.OTHER_VARIABLE}'
};
`;

// Escribir el archivo environment.ts
fs.writeFileSync('./src/environments/environment.ts', envConfigFile);
                     