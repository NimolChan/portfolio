import "reflect-metadata";
import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { portfolioData } from "../lib/portfolio";

@Controller()
class PortfolioController {
  @Get("portfolio")
  getPortfolio() {
    return portfolioData;
  }
}

@Module({
  controllers: [PortfolioController]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: "http://127.0.0.1:3000" });
  await app.listen(3001, "127.0.0.1");
}

void bootstrap();
