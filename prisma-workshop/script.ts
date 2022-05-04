import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.post.update({
    where: { id: 1 },
    data: {
      author: {
        connect: {
          email: "alice@prisma.io",
        },
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
