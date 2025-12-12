import MyAppBar from "@/components/common/MyAppBar";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | The Movie Lovers Club</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyAppBar></MyAppBar>
      <div>
        Blog
      </div>
    </>
  );
}
