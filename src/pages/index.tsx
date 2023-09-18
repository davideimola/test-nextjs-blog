import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import Header from "~/components/Header";
import Image from "next/image";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "~/components/Footer";
import Newsletter from "~/components/Newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davide Imola</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <LastArticles />
        <LastSpeakingActivities />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-0">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
          <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Davide Imola
          </h1>
          <h2 className="mt-1 text-3xl font-bold text-white">
            Software Engineer
          </h2>
          <p className="mt-6 text-3xl font-extralight leading-8 text-gray-400">
            Community Manager & Speaker
          </p>
          <div className="mt-6 flex gap-6">
            <Link
              className="group -m-1 p-1"
              href="https://github.com/davideimola"
              aria-label="Follow on GitHub"
            >
              <FontAwesomeIcon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                icon={faGithub}
              />
            </Link>
            <Link
              className="group -m-1 p-1"
              href="https://linkedin.com/in/davideimola"
              aria-label="Follow on GitHub"
            >
              <FontAwesomeIcon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                icon={faLinkedinIn}
              />
            </Link>
            <Link
              className="group -m-1 p-1"
              href="https://instagram.com/davideimola"
              aria-label="Follow on GitHub"
            >
              <FontAwesomeIcon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                icon={faInstagram}
              />
            </Link>
            <Link
              className="group -m-1 p-1"
              href="https://twitter.com/davideimola"
              aria-label="Follow on GitHub"
            >
              <FontAwesomeIcon
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
                icon={faTwitter}
              />
            </Link>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
          <Image
            width={316}
            height={684}
            className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            src="/davideimola.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

function LastArticles() {
  return (
    <div className="py-12 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            The latest articles came out from my blog
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
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
                      src={post.author.imageUrl}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-white/10"
                    />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

const speakingActivities = [
  {
    id: 1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    event: "DevSecOps Day",
    title: "Securing Secrets in the GitOps Era",
    href: "#",
    category: { name: "Talk", href: "#" },
  },
  {
    id: 2,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    event: "DevSecOps Day",
    title: "Securing Secrets in the GitOps Era",
    href: "#",
    category: { name: "Webinar", href: "#" },
  },
  {
    id: 3,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    event: "DevSecOps Day",
    title: "Securing Secrets in the GitOps Era",
    href: "#",
    category: { name: "Webinar", href: "#" },
  },
];

function LastSpeakingActivities() {
  return (
    <div className="py-12 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My latest speaking activities
          </h2>
          <p className="mt-2 text-lg leading-8 text-white">
            Talks, webinars and conferences I have been part of
          </p>
        </div>
        <div className="mx-auto mt-16">
          <ul role="list" className="divide-y divide-gray-800">
            {speakingActivities.map((speakingActivity) => (
              <li
                key={speakingActivity.id}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  {/*<img className="h-12 w-12 flex-none rounded-full bg-gray-800" src={person.imageUrl} alt="" />*/}
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-white">
                      {speakingActivity.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-400">
                      {speakingActivity.event}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      {speakingActivity.category.name}
                    </span>
                  </p>
                  <p className="mt-1 text-xs leading-5 text-gray-400">
                    <time dateTime={speakingActivity.datetime}>
                      {speakingActivity.date}
                    </time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
