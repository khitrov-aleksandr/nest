import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    await new Promise(f => setTimeout(f, 10000));
    return this.appService.getHello();
  }

  @Get('/about')
  getAbout(): string {
    return this.appService.getHello();
  }
}
