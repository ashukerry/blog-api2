import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Passport } from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwt } from '../constant';
@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ingnoreExpiration: false,

      secretOrKey: jwt.secretKey,
    });
  }
  validate(payload: { sub: string; email }) {
    return { id: payload.sub, email: payload };
  }
}
