"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.TestService = void 0;
const test_item_mapping_1 = require("../mapping/test-item-mapping");
const test_repository_1 = require("../repositories/test-repository");
const tsyringe_1 = require("tsyringe");
let TestService = class TestService {
    constructor(testRepository) {
        this.testRepository = testRepository;
    }
    create(testItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const testData = yield this.testRepository.create(testItem);
            // Some business logic ...
            return testData;
        });
    }
    update(id, testItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const testData = yield this.testRepository.update(id, testItem);
            // Some business logic ...
            return testData;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const testData = yield this.testRepository.get(id);
            // Some business logic ...
            // Mapping to DTO excluding age or any sensitive data
            return test_item_mapping_1.TestItemMapping.mapToTestItemDTO(testData);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const testData = yield this.testRepository.getAll();
            // Some business logic ...
            return testData;
        });
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('TestRepository')),
    __metadata("design:paramtypes", [test_repository_1.TestRepository])
], TestService);
