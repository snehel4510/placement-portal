"use client";

import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto mt-[20px] flex h-10 max-w-5xl items-center justify-between gap-2">
        <span className="font-semibold">
          {user?.primaryEmailAddress?.emailAddress}
        </span>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
          </Button>
          {/* <Button
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
          >
            Log out
          </Button> */}
        </div>
      </div>
    </div>
  );
}
