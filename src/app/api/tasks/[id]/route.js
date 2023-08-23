import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const taskUpdate = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      //Al devolver data puedo modificar parcial o totalmente la información
      data: data,
    });
    return NextResponse.json(taskUpdate);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
