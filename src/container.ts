import { container } from 'tsyringe';
import { TestService } from './services/test-service';
import { TestRepository } from './repositories/test-repository';

// Register services and repositories in the container
container.register('TestService', {
  useClass: TestService,
});

container.register('TestRepository', {
  useClass: TestRepository,
});
