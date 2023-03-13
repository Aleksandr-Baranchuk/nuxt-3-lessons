import {PrismaClient} from "@prisma/client";
import {defineEventHandler} from "h3";

const prisma = new PrismaClient();
export default defineEventHandler(async () => {
    return prisma.user.findMany();
})
