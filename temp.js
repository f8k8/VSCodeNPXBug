const { execSync } = require("child_process");

execSync("set DEBUG=*&& npx prisma format --schema \".\\prisma\\schema.prisma\"", { env: { ...process.env, DEBUG: "*" }, stdio: 'inherit'});
console.log("done format");
execSync("set DEBUG=*&& npx prisma generate --schema \".\\prisma\\schema.prisma\"", { env: { ...process.env, DEBUG: "*" }, stdio: 'inherit'});
console.log("done generate");
