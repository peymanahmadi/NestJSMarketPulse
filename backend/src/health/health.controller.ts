import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  @Get()
  @ApiOperation({summary: 'Check server health'})
  @ApiResponse({status: 200, description: 'Server is healthy', type: Object})
  getHealth(): { status: string } {
    return { status: 'OK' };
  }
}
