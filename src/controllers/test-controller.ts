import { Request, Response } from 'express';
import { TestService } from '../services/test-service';
import { inject, injectable } from 'tsyringe';

@injectable()
export class TestController {
  constructor(@inject('TestService') private testService: TestService) {
    this.testService = testService;
  }

  async testMethod(req: Request, res: Response): Promise<void> {
    try {
      const data = await this.testService.get('id_test');

      res.status(200).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal server error');
    }
  }
}
