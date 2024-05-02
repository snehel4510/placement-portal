// Import necessary modules
import { notFound } from "next/navigation";
import { cache } from "react";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import { useClerk } from "@clerk/nextjs";

interface ProfilePageProps {
  params: { enroll: string };
}

const getStudent = cache(async (enroll: string) => {
  const student = await prisma.student.findUnique({
    where: { enroll },
  });
  if (!student) notFound();
  return student;
});

export async function generateStaticParams() {
  const students = await prisma.student.findMany();
  return students.map(({ enroll }) => enroll);
}

export async function generateMetadata({
  params: { enroll },
}: ProfilePageProps): Promise<Metadata> {
  const student = await getStudent(enroll);

  return {
    title: student.name,
  };
}

export default async function ProfilePage({
  params: { enroll },
}: ProfilePageProps) {
  const { user } = useClerk();
  const student = await getStudent(user?.username as string);
  return (
    <div className="p-5">
      <h1 className="mb-5 text-3xl font-bold">Profile</h1>
      {student ? (
        <>
          <p>Name: {student.name}</p>
          <p>Enroll: {student.enroll}</p>
          <p>Email: {student.email}</p>
          <p>Year: {student.year}</p>
          <p>Branch: {student.branch}</p>
        </>
      ) : (
        <p>No student found.</p>
      )}
    </div>
  );
}
