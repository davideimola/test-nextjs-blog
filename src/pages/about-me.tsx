import Head from "next/head";
import Header from "~/components/Header";
import Newsletter from "~/components/Newsletter";
import Footer from "~/components/Footer";

export default function AboutMe() {
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
        <Footer />
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="overflow-hidden bg-none py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                $ whoami
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Davide Imola
              </p>
              <p className="mt-6 text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <p className="mt-6 text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <p className="mt-6 text-lg leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                      <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                        main.go
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">
                        Dockerfile
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    <pre>
                      <code className="language-go code-highlight">
                        <span className="code-line">
                          <span className="token keyword">func</span>{" "}
                          <span className="token function">main</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                        </span>
                        <br />
                        <span className="code-line">
                          {"   "}
                          davide <span className="token operator">:=</span>{" "}
                          <span className="token operator">&amp;</span>Person
                          <span className="token punctuation">{"{"}</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"       "}
                          Name<span className="token punctuation">:</span>
                          {"     "}
                          <span className="token string">
                            {'"Davide Imola"'}
                          </span>
                          <span className="token punctuation">,</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"       "}
                          Age<span className="token punctuation">:</span>
                          {"      "}
                          <span className="token number">28</span>
                          <span className="token punctuation">,</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"       "}
                          Location<span className="token punctuation">
                            :
                          </span>{" "}
                          <span className="token string">
                            {'"Verona, Italy"'}
                          </span>
                          <span className="token punctuation">,</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"       "}
                          Job<span className="token punctuation">:</span>
                          {"      "}
                          <span className="token string">
                            {'"Software Engineer"'}
                          </span>
                          <span className="token punctuation">,</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"   "}
                          <span className="token punctuation">{"}"}</span>
                        </span>
                        <br />
                        <br />

                        <span className="code-line">
                          {"   "}
                          <span className="token keyword">if</span> err{" "}
                          <span className="token operator">:=</span> davide
                          <span className="token punctuation">.</span>
                          <span className="token function">Hello</span>
                          <span className="token punctuation">(</span>
                          <span className="token punctuation">)</span>
                          <span className="token punctuation">;</span> err{" "}
                          <span className="token operator">!=</span>{" "}
                          <span className="token boolean">nil</span>{" "}
                          <span className="token punctuation">{"{"}</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"       "}
                          <span className="token function">panic</span>
                          <span className="token punctuation">(</span>err
                          <span className="token punctuation">)</span>
                        </span>
                        <br />

                        <span className="code-line">
                          {"   "}
                          <span className="token punctuation">{"}"}</span>
                        </span>
                        <br />

                        <span className="code-line">
                          <span className="token punctuation">{"}"}</span>
                        </span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
