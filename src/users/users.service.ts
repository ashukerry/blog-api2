import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaSerivice: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prismaSerivice.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prismaSerivice.user.findMany();
  }

  findOne(id: string) {
    return this.prismaSerivice.user.findUnique({ where: { id } });
  }
  findOneEmail(email: string) {
    return this.prismaSerivice.user.findUnique({ where: { email } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prismaSerivice.user.update({
      data: updateUserDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prismaSerivice.user.delete({ where: { id } });
  }
}
