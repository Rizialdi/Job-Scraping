import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsString } from 'class-validator';

/**
 * Enum giving the valid mode for the search route
 */
enum EMode {
  /**
   * searching through endpoint
   */
  ENDPOINT = 'endpoint',
  /**
   * searching through headless browsing
   */
  BROWSER = 'browser',
}

/**
 * Query params dto
 */
class QueryParamsSearchDto {
  @IsDefined()
  @IsEnum(EMode)
  @ApiProperty({ description: 'Mode to search with.', enum: EMode })
  mode: EMode;

  @IsDefined()
  @IsString()
  @ApiProperty({
    description: 'Keyword to search.',
    type: String,
  })
  keyword: string;
}

export { EMode, QueryParamsSearchDto };
