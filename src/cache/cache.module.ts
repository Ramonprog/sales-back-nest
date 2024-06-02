import { Module } from '@nestjs/common'
import { CacheModule as CacheModuleNest } from '@nestjs/cache-manager'
import { CacheService } from './cache.service'

@Module({
  providers: [CacheService],
  imports: [
    CacheModuleNest.register({
      ttl: 9000000,
    }),
  ],
  exports: [CacheService],
})
export class CacheModule {}
