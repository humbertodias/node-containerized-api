import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    onModuleInit() {
        this.$connect();
    }

    enableShutdownHooks(app: INestApplication){
        process.on('beforeExit', async () => {
            await app.close();
        })
    }

}