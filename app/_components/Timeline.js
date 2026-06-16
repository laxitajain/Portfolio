import { educationTimeline } from "@/app/_lib/constants";

export default function Timeline() {
  return (
    <ol class="relative border-s-2 border-accent-100 ml-2">
      {educationTimeline.map((education) => (
        <li className="relative mb-10 ms-6" key={education.qualification}>
          <span className="absolute flex items-center justify-center w-5 h-5 bg-secondary-10 rounded-full -start-[35px] top-1 shadow-[0_0_10px_rgba(195,151,234,0.5)]"></span>
          <h3 className="flex items-center mb-1 text-xl font-bold text-accent-40">
            {education.qualification}
          </h3>
          <div className="block mb-2 text-base text-primary-60">
            <ul className="space-y-1">
              <li className="font-semibold">{education.institute}</li>
              <li className="text-sm">
                {education.graduationYear}, {education.grade}
              </li>
            </ul>
          </div>
          <p className="mb-4 text-base font-normal text-accent-30 text-justify leading-7">
            {education.accolades}
          </p>
        </li>
      ))}
    </ol>
  );
}
