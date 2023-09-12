import Head from "next/head";
import Header from "~/components/Header";
import Newsletter from "~/components/Newsletter";
import Footer from "~/components/Footer";

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Davide Imola</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <SpeakingActivities />
        <Footer />
      </main>
    </>
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

function SpeakingActivities() {
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
          <form>
            <label
              htmlFor="default-search"
              className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-4 w-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Search Talks, Interviews..."
                required
              />
              <button
                type="submit"
                className="absolute bottom-2.5 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

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
