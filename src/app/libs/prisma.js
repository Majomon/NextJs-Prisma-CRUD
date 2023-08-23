//Para conectarme a la base de datos de prisma
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();
