import bcrypt from "bcrypt";
import { prisma } from "../../../core/prisma";
import HttpException from "../../../shared/errors/htttp-exceptions";

export class RegisterService {
  async register(data: { name: string; email: string; password: string }) {
    const exists = await (prisma as any).user.findUnique({
      where: { email: data.email }
    });

    if (exists) {
      throw new HttpException(400, "Email already registered");
    }

    const hashed = await bcrypt.hash(data.password, 10);

    const user = await (prisma as any).user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashed,
      },
    });

    return user;
  }
}
