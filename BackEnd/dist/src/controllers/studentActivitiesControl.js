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
const studentActivities_1 = __importDefault(require("../models/studentActivities"));
const httpStatus_1 = __importDefault(require("../Enums/httpStatus"));
class StudentActivitiesControl {
    constructor() {
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, classroom, date, time } = req.body;
            try {
                const studentActivities = new studentActivities_1.default({ title, classroom, date, time });
                const createStudentActivities = yield studentActivities.save();
                if (createStudentActivities)
                    res.status(httpStatus_1.default.CREATED).json(createStudentActivities);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in post method Student Activities`);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllStudentActivities = yield studentActivities_1.default.find();
                if (getAllStudentActivities)
                    res.status(httpStatus_1.default.OK).json(getAllStudentActivities);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in get method Student Activities `);
            }
        });
        this.patch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { title, classroom, date, time } = req.body;
            try {
                const updateStudentActivities = yield studentActivities_1.default.findOneAndUpdate({ _id: id }, { title, classroom, date, time }, { new: true });
                if (updateStudentActivities)
                    res.status(httpStatus_1.default.CREATED).json(updateStudentActivities);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in patch method Student Activities`);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const deleteStudentActivities = yield studentActivities_1.default.findOneAndDelete({
                    _id: id,
                });
                if (deleteStudentActivities)
                    res.status(httpStatus_1.default.OK).json(deleteStudentActivities);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in delete method Student Activities`);
            }
        });
    }
}
exports.default = StudentActivitiesControl;
;
