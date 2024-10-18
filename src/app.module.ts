import { Module } from '@nestjs/common';
import { ComputerModule } from './computer-project/computer/computer.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule, ComputerModule],
})
export class AppModule {}
