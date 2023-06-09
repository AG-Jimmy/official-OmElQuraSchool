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
const bestStudent_1 = __importDefault(require("../models/bestStudent"));
const httpStatus_1 = __importDefault(require("../Enums/httpStatus"));
class BestStudentControl {
    constructor() {
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, classroom, rating } = req.body;
            try {
                const bestStudent = new bestStudent_1.default({ name, classroom, rating });
                const createBestStudent = yield bestStudent.save();
                if (createBestStudent)
                    res.status(httpStatus_1.default.CREATED).json(createBestStudent);
            }
            catch (error) {
                res.status(httpStatus_1.default.BAD_REQUEST).json(`${error} in post method best student`);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllBestStudent = yield bestStudent_1.default.find();
                if (getAllBestStudent)
                    res.status(httpStatus_1.default.OK).json(getAllBestStudent);
            }
            catch (error) {
                res.status(500).json(`${error} in get method best student `);
            }
        });
        this.patch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { name, classroom, rating } = req.body;
            try {
                const updateBestStudent = yield bestStudent_1.default.findOneAndUpdate({ _id: id }, { name, classroom, rating }, { new: true });
                if (updateBestStudent)
                    res.status(httpStatus_1.default.CREATED).json(updateBestStudent);
            }
            catch (error) {
                res.status(500).json(`${error} in patch method best student`);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const deleteBestStudent = yield bestStudent_1.default.findOneAndDelete({
                    _id: id,
                });
                if (deleteBestStudent)
                    res.status(httpStatus_1.default.OK).json(deleteBestStudent);
            }
            catch (error) {
                res.status(500).json(`${error} in delete method best student`);
            }
        });
    }
}
exports.default = BestStudentControl;
;
