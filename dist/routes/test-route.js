"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestRoute = void 0;
const express_1 = require("express");
const test_controller_1 = require("../controllers/test-controller");
const tsyringe_1 = require("tsyringe");
class TestRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.testController = tsyringe_1.container.resolve(test_controller_1.TestController);
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get('/testroute', this.testController.testMethod.bind(this.testController));
    }
    getRouter() {
        return this.router;
    }
}
exports.TestRoute = TestRoute;
