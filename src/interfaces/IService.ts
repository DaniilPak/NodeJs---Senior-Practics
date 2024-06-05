// src/interfaces/IService.ts
export interface IService<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  delete(id: string): Promise<void>;
  get(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}
