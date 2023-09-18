import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { allPosts } from "contentlayer/generated";

export const blogRouter = createTRPCRouter({
  listPosts: publicProcedure
    .input(z.object({ skip: z.number(), take: z.number() }))
    .query(({ input }) => {
      return {
        posts: allPosts
          .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          })
          .slice(input.skip, input.skip + input.skip + input.take),
        total: allPosts.length,
      };
    }),
});
