import { redirect } from "next/navigation";

export default function RootPage() {
  // 重定向到登录页面
  redirect("/zh/login");
}