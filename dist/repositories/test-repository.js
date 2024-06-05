"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.TestRepository = void 0;
const tsyringe_1 = require("tsyringe");
// Imitates response from DataBase
const test_model_1 = require("../models/test-model");
let TestRepository = class TestRepository {
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const testItem = test_model_1.testQuery[0];
            return testItem;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const testItems = test_model_1.testQuery;
            return testItems;
        });
    }
    create(testItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdTestItem = test_model_1.testQuery[0];
            return createdTestItem;
        });
    }
    update(id, testItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTestItem = test_model_1.testQuery[0];
            return updatedTestItem;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
};
exports.TestRepository = TestRepository;
exports.TestRepository = TestRepository = __decorate([
    (0, tsyringe_1.injectable)()
], TestRepository);
