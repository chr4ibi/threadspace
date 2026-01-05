"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

// This MUST be a Client Component because it uses useState
export function VoteButtons({ initialVotes = 0 }: { initialVotes?: number }) {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleVote = (type: "up" | "down") => {
    if (userVote === type) {
      // Remove vote
      setVotes(votes + (type === "up" ? -1 : 1));
      setUserVote(null);
    } else if (userVote === null) {
      // New vote
      setVotes(votes + (type === "up" ? 1 : -1));
      setUserVote(type);
    } else {
      // Change vote
      setVotes(votes + (type === "up" ? 2 : -2));
      setUserVote(type);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={userVote === "up" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleVote("up")}
      >
        ↑
      </Button>
      <span className="min-w-[2rem] text-center text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {votes}
      </span>
      <Button
        variant={userVote === "down" ? "default" : "ghost"}
        size="sm"
        onClick={() => handleVote("down")}
      >
        ↓
      </Button>
    </div>
  );
}
