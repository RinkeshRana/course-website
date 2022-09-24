import Head from "next/head";
import Header from "../components/Header";
import TopCourses from "../components/TopCourses";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Courses Duniya - Learn Programming, Web Development, Data Science,
        </title>
        <meta
          name="description"
          content="Learn Programming, Web Development, Data Science, Machine Learning, AI, Cloud Computing, Cyber Security, Ethical Hacking, Digital Marketing, Graphic Design, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="">
        <Header />
      </section>
      <section>
        <TopCourses
          title={"Top Courses"}
          description={"Visit top courses avaliable in our platform"}
          categoryId={"0"}
        />
      </section>
      <section>
        <TopCourses
          title={"Learn to code"}
          description={
            "Coding tells a machine which actions to perform and how to complete tasks. Programming languages provide the rules for building websites, apps, etc."
          }
          categoryId={"1"}
        />
      </section>
      <section>
        <TopCourses
          title={"Randomly Uploaded"}
          description={
            "Courses which are randomly uploaded on the platform. You can also contribute to the platform by uploading your own courses."
          }
          categoryId={"2"}
        />
      </section>
    </div>
  );
}
