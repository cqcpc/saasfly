import Link from "next/link";

import * as Icons from "@saasfly/ui/icons";

import { XBlogArticle } from "~/components/blog-card";
import { Comments } from "~/components/comments";
import { DocumentGuide } from "~/components/document-guide";
import { FeaturesCard } from "~/components/features-card";
import { Meteorss } from "~/components/meteors-card";
import { Questions } from "~/components/questions";
import ShimmerButton from "~/components/shimmer-button";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { WobbleCardShow } from "~/components/wobble";
import { WordReveal } from "~/components/word-reveal";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { Meteor } from "~/types/meteors";

const meteors_data: Meteor = {
  name: "Join our Discord",
  description:
    "Join our Discord server to chat with other developers and get help.",
  button_content: "Chat with us",
  url: "https://discord.com/invite/b9uTZjdkrb",
};

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="h-[100vh] w-full">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex flex-col pr-4 pt-28">
            <Link href="https://document.saasfly.io" target="_blank">
              <DocumentGuide>
                {dict.marketing.introducing || "Introducing Saasfly"}
              </DocumentGuide>
            </Link>

            <div className="mt-4 pr-12">
              <h1 className="relative mb-6 max-w-4xl text-left text-3xl font-bold dark:text-zinc-100 md:text-7xl">
                {dict.marketing.title ||
                  "Saasfly: A new SaaS player? Make things easier."}
              </h1>
            </div>

            <div>
              <span className="text-zinc-500 sm:text-xl">
                {dict.marketing.sub_title ||
                  "Your complete All-in-One solution for building SaaS services."}
              </span>
              <TypewriterEffectSmooths />
            </div>

            <div className="mt-8 flex">
              <Link href={`${lang}/login`}>
                <ShimmerButton>
                  <span className="z-10 w-36 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                    {dict.marketing.get_started}
                  </span>
                </ShimmerButton>
              </Link>

              <Link href="https://github.com/saasfly/saasfly" target="_blank">
                <div className="ml-10 flex h-full items-center justify-center">
                  <Icons.GitHub className="mr-2 h-6 w-6" />
                  <span className="text-base font-semibold">
                    {dict.marketing.view_on_github || "View on GitHub"}
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="h-full w-full">
            <div className="flex flex-col pl-[120px] pt-28">
              <Meteorss meteor={meteors_data} />
              <div className="mt-4 flex w-full justify-between">
                <XBlogArticle />
                <div className="ml-4">
                  <FeaturesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-[100vh] w-full">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <WobbleCardShow />
          </div>
          <div className="h-full w-[40%]">
            <div className="flex flex-col pl-[120px]">
              <WordReveal />
            </div>
          </div>
        </div>
      </section>

      <section className="h-[100vh] w-full">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <div className="px-[120px]">
              <Questions />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              What People Are Saying
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            Don’t just take our word for it. Here’s what{" "}
            <span className="font-bold">real people</span> are saying about
            Saasfly.
          </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
