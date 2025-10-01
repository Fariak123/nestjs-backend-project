import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'POST, GET, DELETE, PUT',
    optionsSuccessStatus: 204,
  });
  await app.listen(process.env.PORT ?? 8000);
}
void bootstrap();
