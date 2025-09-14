import { redirect } from "next/navigation";
import type { Locale } from "~/config/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  // 重定向到 imageprompt 页面
  redirect(`/${lang}/imageprompt`);
}
