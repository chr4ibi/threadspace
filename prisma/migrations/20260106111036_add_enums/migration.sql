-- CreateEnum
CREATE TYPE "VoteType" AS ENUM ('upvote', 'downvote');

-- CreateEnum
CREATE TYPE "CommunityRole" AS ENUM ('member', 'moderator', 'admin');

-- AlterTable: Convert CommunityMember.role from TEXT to CommunityRole enum
-- Step 1: Drop the default
ALTER TABLE "CommunityMember" ALTER COLUMN "role" DROP DEFAULT;

-- Step 2: Convert the column type
ALTER TABLE "CommunityMember"
  ALTER COLUMN "role" TYPE "CommunityRole"
  USING (role::"CommunityRole");

-- Step 3: Re-add the default
ALTER TABLE "CommunityMember" ALTER COLUMN "role" SET DEFAULT 'member'::"CommunityRole";

-- AlterTable: Convert Vote.type from TEXT to VoteType enum
ALTER TABLE "Vote"
  ALTER COLUMN "type" TYPE "VoteType"
  USING (type::"VoteType");
