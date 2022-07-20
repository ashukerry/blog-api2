import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './strategy/local.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwt } from './constant';
import { jwtStrategy } from './strategy/jwt.strategy';

@Module({
  providers: [AuthService, LocalStrategy, jwtStrategy],
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: jwt.secretKey,
      signOptions: { expiresIn: '10h' },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
