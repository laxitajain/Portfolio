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
        A pre-final year student in B.Tech., Computer Science who relishes
        learning new things. I am focused on readily honing my skills in
        problem-solving, with 400+ questions solved till date. I enjoy web
        development and the endless creative possibilities that it offers.
        Employimg my ReactJS, NodeJS skills to build web applications is my
        forte. I am a curious Machine Learning Enthusiast and the field of deep
        learning and neural networks garners my interest. With a 3.96/4.00 CGPA,
        I have maintained a decent academic track record. Beyond academics, I am
        an avid reader, a comic fanatic and an occasional writer. I value
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
