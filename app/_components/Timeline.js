import { educationTimeline } from "@/app/_lib/constants";

export default function Timeline() {
  return (
    <ol class="relative border-s-2 border-accent-100 ml-2">
      {educationTimeline.map((education) => (
        <li class="mb-10 ms-6" key={education.qualification}>
          <span class="absolute flex items-center justify-center w-5 h-5 bg-secondary-30 rounded-full -start-3  "></span>
          <h3 class="flex items-center mb-1 text-lg  text-accent-40">
            {education.qualification}
          </h3>
          <div class="block mb-2 text-sm leading-none text-primary-60 ">
            <ul className="space-y-2">
              <li> {education.institute}</li>
              <li>
                {education.graduationYear}, {education.grade}
              </li>
            </ul>
          </div>
          <p class="mb-4 text-base font-normal text-accent-30">
            {education.accolades}
          </p>
        </li>
      ))}
    </ol>
  );
}
