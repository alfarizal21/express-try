
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import HttpException from "../../../shared/errors/htttp-exceptions";
import { prisma } from "../../../core/prisma";

class LoginService {
  async login(data: { email: string; password: string }) {
    const user = await (prisma as any).user.findUnique({
      where: { email: data.email }
    });

    if (!user) {
      throw new HttpException(401, "Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new HttpException(401, "Invalid email or password");
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1h" }
    );

    return { token, user: { id: user.id, name: user.name, email: user.email } };
    }
}

export default LoginService;
