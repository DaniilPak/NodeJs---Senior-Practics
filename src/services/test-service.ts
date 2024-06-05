import { IService } from '../interfaces/IService';
import { ITestItem } from '../interfaces/ITestItem';
import { TestItemMapping } from '../mapping/test-item-mapping';
import { TestRepository } from '../repositories/test-repository';
import { injectable, inject } from 'tsyringe';

@injectable()
export class TestService {
  constructor(
    @inject('TestRepository') private testRepository: TestRepository
  ) {}

  async create(testItem: ITestItem): Promise<ITestItem> {
    const testData: ITestItem = await this.testRepository.create(testItem);
    // Some business logic ...
    return testData;
  }

  async update(id: string, testItem: ITestItem): Promise<ITestItem> {
    const testData: ITestItem = await this.testRepository.update(id, testItem);
    // Some business logic ...
    return testData;
  }

  async delete(id: string): Promise<void> {}

  async get(id: string): Promise<TestItemDTO> {
    const testData: ITestItem = await this.testRepository.get(id);
    // Some business logic ...

    // Mapping to DTO excluding age or any sensitive data
    return TestItemMapping.mapToTestItemDTO(testData);
  }

  async getAll(): Promise<ITestItem[]> {
    const testData: ITestItem[] = await this.testRepository.getAll();
    // Some business logic ...
    return testData;
  }
}
