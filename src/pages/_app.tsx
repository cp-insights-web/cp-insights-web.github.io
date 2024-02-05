import Sidebar from "@/components/left_sidebar";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/left_sidebar.css";
import "@/styles/markdown.css";
import "@/styles/background.css";
import { IconContext } from "react-icons";
import { Background } from "@/components/background";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
      <div className="flex-row">
        <Sidebar />
        <main>
          <Background useStreaks={router.pathname === '/'}/>

          <div id="content">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
  )
}
