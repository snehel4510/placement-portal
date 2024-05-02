import { Student } from "@prisma/client";

interface ProfilePageProps {
  student: Student;
}

export default function ProfilePage({ student }: ProfilePageProps) {
  return (
    <div className="p-5">
      <h1 className="mb-5 text-3xl font-bold">Profile</h1>
      <p>Name: {student.name}</p>
      <p>Enroll: {student.enroll}</p>
      <p>Email: {student.email}</p>
      <p>Year: {student.year}</p>
      <p>Branch: {student.branch}</p>
    </div>
  );
}
