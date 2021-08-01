import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './filters/exception.filter';
import { CustomValidationPipe } from './pipes/custom-validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new CustomValidationPipe());
  app.useGlobalFilters(new CustomExceptionFilter());
  app.setGlobalPrefix('v1');
  await app.listen(3000);
}
bootstrap();
