import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): { version: string } {
    return { version: 'v1.0.0' };
  }
}
