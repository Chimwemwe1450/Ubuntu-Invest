
// setting secrets  
const setEnv = () => {
    const fs = require('fs');
    const writeFile = fs.writeFile;
    const colors = require('colors');
    require('dotenv').config({
      path: 'src/environments/.env'
    });
  
    const targetPath = './src/environments/environment.ts';
  
    //exporting the secrets to enviroment file 
    const envConfigFile = `export const environment = {
    client_id: '${process.env["CLIENT_ID"]}',
    CLIENT_SECRECT: '${process.env["CLIENT_SECRECT"]}',
    GRANT_TYPE: '${process.env["GRANT_TYPE"]}',
    USERNAME: '${process.env["USERNAME1"]}',
    PASSWORD: '${process.env["PASSWORD"]}',
      production: false,
    };
    `;

    writeFile(targetPath, envConfigFile, (err: any) => {
      if (err) {
        console.error(err);
        throw err;
      } else {
        console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
      }
    });
  };
  
  setEnv();
  