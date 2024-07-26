import * as fs from "fs";
import * as path from "path";
import * as ip from "ip";

const port = process.env.API_URL_PORT || 90;
const fullIpAddress = `http://${ip.address()}:${port}`;

const envFilePath = path.resolve(__dirname, "../.env");
const newApiUrl = `VITE_APP_DEV_API_URL=${fullIpAddress}`;

let envFileContent = "";

// Read the content of an existing .env file if it exists
if (fs.existsSync(envFilePath))
  envFileContent = fs.readFileSync(envFilePath, "utf-8");

// Replace existing VITE_APP_DEV_API_URL or add it if it doesn't exist
const regex = /^VITE_APP_DEV_API_URL=.*$/m;
if (regex.test(envFileContent))
  envFileContent = envFileContent.replace(regex, newApiUrl);
else {
  if (envFileContent.length > 0 && !envFileContent.endsWith("\n"))
    envFileContent += "\n";

  envFileContent += newApiUrl + "\n";
}

// Write the updated content back to the .env file
// Creates a new .env file if it doesn't already exists in the project
fs.writeFileSync(envFilePath, envFileContent, "utf-8");

console.log(
  `VITE_APP_DEV_API_URL is now set in environment file to: ${fullIpAddress}`,
);
