
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../../core/prisma";
import HttpException from "../../../shared/errors/htttp-exceptions";

export class LoginService {
  async login(data: { email: string; password: string }) {
    const user = await (prisma as any).user.findUnique({
      where: { email: data.email }
    });

    if (!user) throw new HttpException(401, "Invalid email or password");

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new HttpException(401, "Invalid email or password");

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1d" }
    );

    return { token, user };
  }
}
