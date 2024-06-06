import { IRepository } from '../interfaces/IRepository';
import { ITestItem } from '../interfaces/ITestItem';
import { inject, injectable } from 'tsyringe';

// Imitates response from DataBase
import { testQuery } from '../models/test-model';

@injectable()
export class TestRepository implements IRepository<ITestItem> {
  async get(id: string): Promise<ITestItem> {
    try {
      const testItem = testQuery.find((item) => item.id === id);

      if (!testItem) {
        throw new Error(`Item with ID ${id} not found.`);
      }

      return testItem;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAll(): Promise<ITestItem[]> {
    const testItems: ITestItem[] = testQuery;

    return testItems;
  }

  async create(testItem: ITestItem): Promise<ITestItem> {
    const createdTestItem: ITestItem = testQuery[0];

    return createdTestItem;
  }

  async update(id: string, testItem: ITestItem): Promise<ITestItem> {
    const updatedTestItem: ITestItem = testQuery[0];

    return updatedTestItem;
  }

  async delete(id: string): Promise<void> {}
}
