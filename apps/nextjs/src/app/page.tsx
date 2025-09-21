"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    // 客户端重定向，确保移动端正确处理
    router.replace("/zh/login");
  }, [router]);
  
  // 立即重定向的备用方案
  if (typeof window !== 'undefined') {
    window.location.href = '/zh/login';
  }
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div>正在跳转到登录页面...</div>
    </div>
  );
}