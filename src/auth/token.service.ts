import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../users/models/JwtPayload';
import { User } from '../users/entities/user.entity';

@Injectable()
export class TokenService {
  constructor(private JwtService: JwtService) {}

  generateTokens(user: User) {
    const payload: JwtPayload = {
      userName: user.Name,
      sub: user.Id.toString(),
    };

    return {
      access_token: this.JwtService.sign(payload, {
        privateKey: process.env.ACCESS_SECRET,
        expiresIn: '15m',
      }),
      refresh_token: this.JwtService.sign(
        {},
        {
          secret: process.env.REFRESH_SECRET,
          expiresIn: '15m',
          subject: user.Id.toString(),
        },
      ),
    };
  }
}