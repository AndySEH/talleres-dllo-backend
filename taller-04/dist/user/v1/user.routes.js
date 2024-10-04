"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
// INIT ROUTES
const userRoutes = (0, express_1.Router)();
const users = [{ id: 1, name: "Robin Restrepo", carrera: "Psicologia" }];
// DECLARE ENDPOINT FUNCTIONS
function GetUsers(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield (0, user_controller_1.readUsers)();
        response.status(200).json({
            message: "Success.",
            users: users,
        });
    });
}
//DESARROLLO PUNTO 1
function GetUsersByHobby(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const hobby = request.query.hobby;
        if (!hobby) {
            return response.status(400).json({
                message: "Hobby es requerido",
            });
        }
        const users = yield (0, user_controller_1.readUsers)();
        const usersWithHobby = users.filter(user => user.hobbies.includes(hobby));
        response.status(200).json({
            message: `Usuarios con hobby: ${hobby}`,
            users: usersWithHobby,
        });
    });
}
//DESARROLLO PUNTO 2
function CheckUserExists(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = request.query.id;
        if (!userId) {
            return response.status(400).json({
                message: "Se requiere ID de usuario.",
            });
        }
        const users = yield (0, user_controller_1.readUsers)();
        const userExists = users.some(user => user.id === Number(userId));
        response.status(200).json({
            message: userExists ? "Usuario existente." : "Usuario no existente.",
            exists: userExists,
        });
    });
}
//DESARROLLO PUNTO 3
function GetTeamExperience(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const team = request.query.team;
        if (!team) {
            return response.status(400).json({
                message: "Team es requerido.",
            });
        }
        const users = yield (0, user_controller_1.readUsers)();
        const teamUsers = users.filter(user => user.team === team);
        const totalExperience = teamUsers.reduce((acc, user) => acc + user.years, 0);
        response.status(200).json({
            message: `Experiencia total para el team ${team}: ${totalExperience} años.`,
            totalExperience: totalExperience,
        });
    });
}
//DESARROLLO PUNTO 4
function GetUsersByFaction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const faction = request.query.faction;
        if (!faction) {
            return response.status(400).json({
                message: "Faction es requerida.",
            });
        }
        const users = yield (0, user_controller_1.readUsers)();
        const usersByFaction = users.filter(user => user.faction === faction);
        response.status(200).json({
            message: `Usuarios en faction: ${faction}`,
            users: usersByFaction,
        });
    });
}
//DESARROLLO PUNTO 5
function registerUser(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
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
exports.default = userRoutes;
