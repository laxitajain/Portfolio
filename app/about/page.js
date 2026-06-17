import Link from "next/link";
import Button from "../_components/Button";
import Timeline from "../_components/Timeline";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div>
      <h2 className=" text-2xl text-accent-400 mb-7">About me</h2>
      <div className="mt-4 text-accent-30">
        I am now in my final year of B.Tech. in Computer Science! Throughout my college years, I have practiced Data Structures and Algorithms rigorously and have solved 900+ problems till date. I have studied frontend and backend technologies, and converted those learnings into implementation via several of my <a href="./#projects">projects.</a> I have solid experience in integrating AI into systems and applications via hackathons and internship projects. Recently, I have taken an interest in cloud native technologies and have quickly realised their importance and relevance moving forward~
        Beyond tech, I am an avid reader, a comic fanatic, a writer and a philosophy nerd! I value
        integrity and enjoy engaging in meaningful conversations! :)
      </div>
      {/* <Link
        href="https://drive.google.com/file/d/1Pcvaay1mcUC4pwV5KxH2nNwYFtfJ1olp/view?usp=sharing"
        target="_blank"
      >
        <Button type="primary">Resume</Button>
      </Link> */}
      <div className="mt-8">
        <h3 className=" text-xl text-accent-400 mb-7">Education</h3>
      </div>
      <Timeline />
    </div>
  );
}
