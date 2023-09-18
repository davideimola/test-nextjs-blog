import { allPosts, type Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Markup from "~/components/Markup";
import { type GetStaticPathsResult, type GetStaticPropsContext } from "next";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <>
      <Header />
      <PostTemplate post={post} />
      <Footer />
    </>
  );
}

function PostTemplate({ post }: Props) {
  const MDXContent = useMDXComponent(post.body.code as string);

  return (
    <div className="bg-none px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-base leading-7 text-white">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Davide Imola - {post.date}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-600 sm:text-4xl">
          {post.title}
        </h1>
        <Markup>
          <MDXContent />
        </Markup>
      </div>
    </div>
  );
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params?.slug;
  if (!Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }
  const post = allPosts.find((post) => post.slug === slug.join("/"));

  if (!post) {
    return { notFound: true };
  }

  const props: Props = {
    post,
  };

  return {
    props,
  };
}

export function getStaticPaths(): GetStaticPathsResult {
  const paths = allPosts.map((post) => ({
    params: { slug: post.slug.split("/") },
  }));

  return {
    paths,
    fallback: false,
  };
}
