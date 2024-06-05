export {};

import { Router } from 'express';
import { TestController } from '../controllers/test-controller';
import { TestService } from '../services/test-service';
import { TestRepository } from '../repositories/test-repository';
import { container } from 'tsyringe';

export class TestRoute {
  private readonly router: Router;
  private readonly testController: TestController;

  constructor() {
    this.router = Router();
    this.testController = container.resolve(TestController);
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(
      '/testroute',
      this.testController.testMethod.bind(this.testController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
