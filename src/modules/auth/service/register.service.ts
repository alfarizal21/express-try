import bcrypt from "bcrypt";
import { prisma } from "../../../core/prisma";
import HttpException from "../../../shared/errors/htttp-exceptions";

class RegisterService {
  async register(data: { name: string; email: string; password: string }) {
    const existingUser = await (prisma as any).user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      throw new HttpException(409, "Email already in use");
    }
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = await (prisma as any).user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword
      }
    });

    return { id: newUser.id, name: newUser.name, email: newUser.email };
  }
}

export default RegisterService;
