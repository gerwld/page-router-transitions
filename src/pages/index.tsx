import Head from "next/head";
import Inner from "@/components/Layout/Inner";

export default function Home() {
  return (
    <>
    <Head>
      <title>page-router</title>
    </Head>
    <Inner>
      <h1>Home</h1>
      <div className="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet magni modi doloremque odit beatae et, commodi recusandae libero neque.</p>
        <p>doloremque odit beatae et, commodi recusandae libero neque.</p>
      </div>
    </Inner>
    </>
  );
}
