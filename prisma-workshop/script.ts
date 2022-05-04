import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.create({
    data: {
      name: "Elsa Prisma",
      email: "elsa@prisma.io",
      posts: {
        create: [
          { title: "How to make an omelette" },
          { title: "How to eat an omelette" },
        ],
      },
    },
  });
  console.log(result);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
