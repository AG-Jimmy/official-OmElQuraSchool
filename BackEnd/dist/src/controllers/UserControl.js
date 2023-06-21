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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const joi_1 = __importDefault(require("joi"));
class Users {
    constructor() {
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    firstName: joi_1.default.string().min(3).max(50).required().trim(),
                    lastName: joi_1.default.string().min(3).max(50).required().trim(),
                    email: joi_1.default.string().email({ tlds: { allow: ["com", "net"] } }).required().trim(),
                    password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required().trim(),
                });
                const { error } = schema.validate(req.body);
                if (error) {
                    const message = error.details.map((x) => x.message);
                    res.status(400).json({
                        status: "error",
                        message: "Invalid request data",
                        data: message,
                    });
                }
                else {
                    const { firstName, lastName, email, password } = req.body;
                    const user = new user_1.default({ firstName, lastName, email, password });
                    const createUser = yield user.save();
                    createUser ? res.status(201).json(createUser) : 0;
                }
            }
            catch (error) {
                res.json(`*${error}==> in post method user `);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllUsers = yield user_1.default.find({});
                getAllUsers ? res.status(200).json(getAllUsers) : 0;
            }
            catch (error) {
                res.status(500).json(`${error} in get method user `);
            }
        });
        this.patch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const schema = joi_1.default.object({
                    firstName: joi_1.default.string().min(3).max(50).trim(),
                    lastName: joi_1.default.string().min(3).max(50).trim(),
                    email: joi_1.default
                        .string()
                        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
                        .trim(),
                    password: joi_1.default.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
                });
                const { error } = schema.validate(req.body);
                if (error) {
                    const message = error.details.map((x) => x.message);
                    res.status(400).json({
                        status: "error",
                        message: "Invalid request data",
                        data: message,
                    });
                }
                else {
                    const { firstName, lastName, email, password } = req.body;
                    const id = req.params.id;
                    const updateUser = yield user_1.default.findOneAndUpdate({ _id: id }, { firstName, lastName, email, password }, { new: true });
                    updateUser ? res.status(201).json(updateUser) : 0;
                }
            }
            catch (error) {
                res.json(`${error} in patch method user `);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deleteUser = yield user_1.default.findOneAndDelete({ _id: id });
                deleteUser ? res.status(200).json(deleteUser) : 0;
            }
            catch (error) {
                res.status(500).json(`${error} in delete method user `);
            }
        });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const getOneUser = yield user_1.default.findOne({ _id: id });
                getOneUser ? res.status(200).json(getOneUser) : 0;
            }
            catch (error) {
                res.status(500).json(`${error} in get one user method user `);
            }
        });
    }
}
exports.default = Users;
;
