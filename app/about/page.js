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
        I am a pre-final year student in B.Tech., Computer Science who relishes
        learning new things. Focused on readily honing my skills in
        problem-solving, I have solved 700+ questions till date. My skillset is diverse with modern web frameworks (like NextJS), a knack for CLI utlities and avid interest in Machine Learning.
        I spend most of my time studying algorithms, reading research in AI or contributing to open-source. 
        With a 3.97/4.00 CGPA (I have got to flex it somewhere),
        I have maintained a good academic track record. Beyond tech, I am
        an avid reader, a comic fanatic, an occasional writer and a personal finance enthusiast! I value
        integrity and enjoy engaging in intellectual conversations! :)
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
