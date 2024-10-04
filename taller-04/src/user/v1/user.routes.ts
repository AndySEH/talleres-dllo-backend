import { Router, Request, Response } from "express";
import { readUsers } from "./user.controller";

// INIT ROUTES
const userRoutes = Router();

const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];

// DECLARE ENDPOINT FUNCTIONS
async function GetUsers(request: Request, response: Response) {
  const users = await readUsers();

  response.status(200).json({
    message: "Success.",
    users: users,
  });
}

//DESARROLLO PUNTO 1

async function GetUsersByHobby(request: Request, response: Response) {
  const hobby = request.query.hobby as string;

  if (!hobby) {
    return response.status(400).json({
      message: "Hobby es requerido",
    });
  }

  const users = await readUsers();
  const usersWithHobby = users.filter(user => user.hobbies.includes(hobby));

  response.status(200).json({
    message: `Usuarios con hobby: ${hobby}`,
    users: usersWithHobby,
  });
}

//DESARROLLO PUNTO 2

async function CheckUserExists(request: Request, response: Response) {
  const userId = request.query.id as string;

  if (!userId) {
    return response.status(400).json({
      message: "ID de usuario es requerido.",
    });
  }

  const users = await readUsers();
  const userExists = users.some(user => user.id === Number(userId));

  response.status(200).json({
    message: userExists ? "Usuario existente." : "Usuario no existente.",
    exists: userExists,
  });
}

//DESARROLLO PUNTO 3

async function GetTeamExperience(request: Request, response: Response) {
  const team = request.query.team as string;

  if (!team) {
    return response.status(400).json({
      message: "Team es requerido.",
    });
  }

  const users = await readUsers();
  const teamUsers = users.filter(user => user.team === team);

  const totalExperience = teamUsers.reduce((acc, user) => acc + user.years, 0);

  response.status(200).json({
    message: `Experiencia total para el team ${team}: ${totalExperience} años.`,
    totalExperience: totalExperience,
  });
}

//DESARROLLO PUNTO 4

async function GetUsersByFaction(request: Request, response: Response) {
  const faction = request.query.faction as string;

  if (!faction) {
    return response.status(400).json({
      message: "Faction es requerida.",
    });
  }
  
  const users = await readUsers();
  const usersByFaction = users.filter(user => user.faction === faction);

  response.status(200).json({
    message: `Usuarios en faction: ${faction}`,
    users: usersByFaction,
  });
}

//DESARROLLO PUNTO 5

async function registerUser(request: Request, response: Response) {
  const { id, name, carrera } = request.body;

  if (!id || !name || !carrera) {
      return response.status(400).json({
          message: "Todos los campos son requeridos."
      });
  }

  users.push({ id, name, carrera });

  response.status(201).json({
      message: "Usuario registrado.",
      user: { id, name, carrera },
  });
}


// DECLARE ENDPOINTS
userRoutes.get("/", GetUsers);
userRoutes.get("/hobby", GetUsersByHobby);
userRoutes.get("/exists", CheckUserExists);
userRoutes.get("/team-experience", GetTeamExperience);
userRoutes.get("/by-faction", GetUsersByFaction);
userRoutes.post("/", registerUser);

// EXPORT ROUTES
export default userRoutes;
