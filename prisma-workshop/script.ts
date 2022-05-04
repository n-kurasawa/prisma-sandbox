import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.findUnique({
    where: { email: "alice@prisma.io" },
    include: {
      posts: true,
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
