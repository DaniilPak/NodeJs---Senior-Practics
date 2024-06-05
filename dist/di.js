"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/di.ts
const awilix_1 = require("awilix");
const test_controller_1 = require("./controllers/test-controller");
const test_service_1 = require("./services/test-service");
const container = (0, awilix_1.createContainer)({
    injectionMode: awilix_1.InjectionMode.CLASSIC,
});
container.register({
    testService: (0, awilix_1.asClass)(test_service_1.TestService),
    testController: (0, awilix_1.asClass)(test_controller_1.TestController).inject(() => ({
        testService: container.resolve('testService'),
    })),
});
exports.default = container;
