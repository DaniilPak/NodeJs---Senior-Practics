// test/repositories/TestRepository.test.ts
import { TestRepository } from './test-repository';
import { ITestItem } from '../../src/interfaces/ITestItem';

describe('TestRepository', () => {
  let testRepository: TestRepository;
  let mockData: ITestItem[];

  beforeEach(() => {
    // Mock data setup
    mockData = [
      { id: '1', name: 'Johny', age: 40 },
      { id: '2', name: 'Victor', age: 52 },
    ];
    // Create instance of repository
    testRepository = new TestRepository();
  });

  it('should return the correct test item by id', async () => {
    const testItem = await testRepository.get('1');
    expect(testItem).toEqual(mockData[0]);
  });

  it('should throw error if the item does not exist', async () => {
    // Use expect() inside an async function with rejects to properly catch the thrown error
    await expect(testRepository.get('3')).rejects.toThrow(
      'Item with ID 3 not found.'
    );
  });
});
