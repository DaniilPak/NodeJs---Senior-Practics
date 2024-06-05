"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const test_service_1 = require("./services/test-service");
const test_repository_1 = require("./repositories/test-repository");
// Register services and repositories in the container
tsyringe_1.container.register('TestService', {
    useClass: test_service_1.TestService,
});
tsyringe_1.container.register('TestRepository', {
    useClass: test_repository_1.TestRepository,
});
