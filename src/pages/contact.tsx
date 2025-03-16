import Head from "next/head";
import Stairs from "@/components/Layout/Stairs";

export default function Contact() {
  return (
    <>
    <Head>
      <title>page-router</title>
    </Head>
    <Stairs>
      <h1>Contact</h1>
      <div className="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet magni modi doloremque odit beatae et, commodi recusandae libero neque.</p>
        <p>doloremque odit beatae et, commodi recusandae libero neque.</p>
      </div>
    </Stairs>
    </>
  );
}
