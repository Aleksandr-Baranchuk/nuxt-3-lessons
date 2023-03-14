import { PrismaClient } from "@prisma/client";
import { defineEventHandler } from "h3";

const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
    const params = event.context.params || {};

    const user = await prisma.comments.findFirst({
        where: {
            id: params.userId
        }
    });
    if (!user) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Page Not Found'
        })
    }

    return user;
})
