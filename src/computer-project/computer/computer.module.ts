import { Module } from '@nestjs/common';
import { CpuModule } from '../cpu/cpu.module';
import { DiskModule } from '../disk/disk.module';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [CpuModule, DiskModule, PowerModule],
})
export class ComputerModule {}
