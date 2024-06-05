"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestItemMapping = void 0;
class TestItemMapping {
    // Mapping function to convert ITestItem to TestItemDTO
    static mapToTestItemDTO(item) {
        return {
            name: item.name, // Include name, exclude age
        };
    }
}
exports.TestItemMapping = TestItemMapping;
