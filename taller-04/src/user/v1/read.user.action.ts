import { UserModel, UserType } from "./user.model";
import fs from "fs";
import path from "path";

// DECLARE ACTION FUNCTION
async function readUserAction(): Promise<UserType[]> {

  const filePath = path.join(__dirname, '23-taller-04-datos.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  const results: UserType[] = JSON.parse(data);

  return results;
}

// EXPORT ACTION FUNCTION
export default readUserAction;
