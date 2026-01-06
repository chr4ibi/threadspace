import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error(
    "DATABASE_URL environment variable is not set. Please check your .env file.",
  );
}
const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // Create users
  const alice = await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      email: "alice@example.com",
      username: "alice",
      name: "Alice Johnson",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice",
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: "bob@example.com" },
    update: {},
    create: {
      email: "bob@example.com",
      username: "bob",
      name: "Bob Smith",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob",
    },
  });

  const charlie = await prisma.user.upsert({
    where: { email: "charlie@example.com" },
    update: {},
    create: {
      email: "charlie@example.com",
      username: "charlie",
      name: "Charlie Brown",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=charlie",
    },
  });

  console.log("✓ Created users");

  // Create communities
  const nextjs = await prisma.community.upsert({
    where: { name: "nextjs" },
    update: {},
    create: {
      name: "nextjs",
      displayName: "Next.js",
      description:
        "The React Framework for the Web. Used by some of the world's largest companies.",
      creatorId: alice.id,
    },
  });

  const react = await prisma.community.upsert({
    where: { name: "react" },
    update: {},
    create: {
      name: "react",
      displayName: "React",
      description: "A JavaScript library for building user interfaces.",
      creatorId: bob.id,
    },
  });

  const typescript = await prisma.community.upsert({
    where: { name: "typescript" },
    update: {},
    create: {
      name: "typescript",
      displayName: "TypeScript",
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript.",
      creatorId: charlie.id,
    },
  });

  console.log("✓ Created communities");

  // Add members to communities
  await prisma.communityMember.upsert({
    where: {
      userId_communityId: {
        userId: alice.id,
        communityId: nextjs.id,
      },
    },
    update: {},
    create: {
      userId: alice.id,
      communityId: nextjs.id,
      role: "admin",
    },
  });

  await prisma.communityMember.upsert({
    where: {
      userId_communityId: {
        userId: bob.id,
        communityId: nextjs.id,
      },
    },
    update: {},
    create: {
      userId: bob.id,
      communityId: nextjs.id,
    },
  });

  await prisma.communityMember.upsert({
    where: {
      userId_communityId: {
        userId: charlie.id,
        communityId: react.id,
      },
    },
    update: {},
    create: {
      userId: charlie.id,
      communityId: react.id,
    },
  });

  console.log("✓ Added community members");

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      title: "Getting Started with Next.js 14",
      content:
        "Next.js 14 introduces some amazing features including Server Actions, partial prerendering, and improved performance. Let's discuss!",
      communityId: nextjs.id,
      authorId: alice.id,
    },
  });

  const post2 = await prisma.post.create({
    data: {
      title: "App Router vs Pages Router",
      content:
        "What are your thoughts on migrating from Pages Router to App Router? Share your experiences!",
      communityId: nextjs.id,
      authorId: bob.id,
    },
  });

  const post3 = await prisma.post.create({
    data: {
      title: "React Server Components Explained",
      content:
        "A deep dive into how React Server Components work and why they're game-changing for web development.",
      communityId: react.id,
      authorId: charlie.id,
    },
  });

  console.log("✓ Created posts");

  // Create comments
  const comment1 = await prisma.comment.create({
    data: {
      content:
        "Great post! I've been using Next.js 14 in production and it's been fantastic.",
      postId: post1.id,
      authorId: bob.id,
    },
  });

  await prisma.comment.create({
    data: {
      content: "Totally agree! The performance improvements are noticeable.",
      postId: post1.id,
      authorId: charlie.id,
      parentId: comment1.id, // Reply to comment1
    },
  });

  await prisma.comment.create({
    data: {
      content: "The migration was smooth for me. The benefits are worth it!",
      postId: post2.id,
      authorId: alice.id,
    },
  });

  console.log("✓ Created comments");

  // Create votes
  await prisma.vote.create({
    data: {
      type: "upvote",
      userId: bob.id,
      postId: post1.id,
    },
  });

  await prisma.vote.create({
    data: {
      type: "upvote",
      userId: charlie.id,
      postId: post1.id,
    },
  });

  await prisma.vote.create({
    data: {
      type: "upvote",
      userId: alice.id,
      postId: post2.id,
    },
  });

  console.log("✓ Created votes");
  console.log("✅ Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
