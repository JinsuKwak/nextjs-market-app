"use client";
import React from "react";
import Heading from "./Heading";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState = ({
  title = "No Matches Found",
  subtitle = "Try changing or removing some filters",
  showReset,
}: EmptyStateProps) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 items-center justify-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4 ">
        {showReset && <Button outline label="Clear All Filters" onClick={() => router.push("/")} />}
      </div>
    </div>
  );
};

export default EmptyState;
