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
