import { ITestItem } from '../interfaces/ITestItem';

export class TestItemMapping {
  // Mapping function to convert ITestItem to TestItemDTO
  public static mapToTestItemDTO(item: ITestItem): TestItemDTO {
    return {
      name: item.name, // Include name, exclude age
    };
  }
}
