import Head from "next/head";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { api } from "~/utils/api";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Davide Imola</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Posts />
        <Footer />
      </main>
    </>
  );
}

function Posts() {
  const posts = api.blog.listPosts.useQuery({ take: 10, skip: 0 });

  return (
    <div className="py-12 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Posts
          </h2>
          {/*<p className="mt-2 text-lg leading-8 text-white">All</p>*/}
        </div>

        {posts.data ? (
          <div className="mx-auto mt-5 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.data.posts.map((post) => (
              <article
                key={post._id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
              >
                <img
                  src={post.cover as string}
                  alt=""
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={post.date} className="mr-8">
                    {post.dateLocale}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <svg
                      viewBox="0 0 2 2"
                      className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                      <img
                        src="https://github.com/davideimola.png"
                        alt=""
                        className="h-6 w-6 flex-none rounded-full bg-white/10"
                      />
                      Davide Imola
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={post.url}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
