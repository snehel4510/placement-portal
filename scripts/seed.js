const { placeholderJobs } = require("./placeholder-data");
const { placeholderStudents } = require("./placeholder-data");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// async function main() {
//   await Promise.all(
//     placeholderJobs.map(async (job) => {
//       await prisma.job.upsert({
//         where: {
//           slug: job.slug,
//         },
//         update: job,
//         create: job,
//       });
//     }),
//   );
// }

async function main() {
  await Promise.all([
    // Insert placeholderJobs
    ...placeholderJobs.map(async (job) => {
      await prisma.job.upsert({
        where: {
          slug: job.slug,
        },
        update: job,
        create: job,
      });
    }),

    // Insert placeholderStudents
    ...placeholderStudents.map(async (student) => {
      await prisma.student.upsert({
        where: {
          enroll: student.enroll,
        },
        update: student,
        create: student,
      });
    }),
  ]);
}


main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error while seeding database:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
