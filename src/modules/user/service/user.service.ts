import bcrypt from "bcrypt";
import { prisma } from "../../../core/prisma";
import HttpException from "../../../shared/errors/htttp-exceptions";
import { id } from "zod/v4/locales";

class UserService {
    async getProfile(userId: string){
        const user = await (prisma as any).user.findUnique({
            where: { id: userId },
            select: { 
                id: true,
                name: true,
                email: true
            }
        });

        if (!user){
            throw new HttpException(404, 'User not found');
        };

        return user; 
    }

    async updateProfile(userId: string, data: { name?: string; email?:string; password?: string}) {
        const updateData:any = {};

        if (data.name) {
            updateData.name = data.name;
        }

        if (data.password) {
            updateData.password = await bcrypt.hash(data.password, 10);
        }

        if (data.email) {
            updateData.email = data.email;
        }

        const updatedUser = await (prisma as any).user.update({
            where: { id: userId },
            data: updateData,
            select: {
                id: true,
                name: true,
                email: true,
            }
        });

        return updatedUser;
    }
}


export default UserService;