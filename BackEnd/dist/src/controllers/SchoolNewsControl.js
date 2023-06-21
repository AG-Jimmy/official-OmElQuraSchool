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
const schoolNews_1 = __importDefault(require("../models/schoolNews"));
const httpStatus_1 = __importDefault(require("../Enums/httpStatus"));
class SchoolNewsControl {
    constructor() {
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, description, image } = req.body;
            try {
                const schoolNews = new schoolNews_1.default({ title, description, image });
                const createSchoolNews = yield schoolNews.save();
                if (createSchoolNews)
                    res.status(httpStatus_1.default.CREATED).json(createSchoolNews);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in post method School lNews`);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getAllSchoolNews = yield schoolNews_1.default.find();
                if (getAllSchoolNews)
                    res.status(httpStatus_1.default.OK).json(getAllSchoolNews);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in get method school news `);
            }
        });
        this.patch = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const { title, description, image } = req.body;
            try {
                const updateSchoolNews = yield schoolNews_1.default.findOneAndUpdate({ _id: id }, { title, description, image }, { new: true });
                if (updateSchoolNews)
                    res.status(httpStatus_1.default.CREATED).json(updateSchoolNews);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in patch method school news`);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            try {
                const deleteSchoolNews = yield schoolNews_1.default.findOneAndDelete({
                    _id: id,
                });
                if (deleteSchoolNews)
                    res.status(httpStatus_1.default.OK).json(deleteSchoolNews);
            }
            catch (error) {
                res.status(httpStatus_1.default.INTERNAL_SERVER_ERROR).json(`${error} in delete method School News`);
            }
        });
    }
}
exports.default = SchoolNewsControl;
;
