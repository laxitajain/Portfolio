import { achievements } from "@/app/_lib/constants";

export const metadata = {
  title: "Achievements",
};

export default function Page() {
  return (
    <div>
      <h2 className=" text-2xl text-accent-400 mb-7">Achievements</h2>
      <div className="mt-4 text-accent-30"></div>

      <div className="mt-8">
        <ul className="space-y-0.5">
          {achievements.map((item) => (
            // <li className="bg-primary-100  rounded-sm p-3" key={item.title}>
            //   <h3 className=" text-xl text-secondary-30 mb-7">{item.title}</h3>
            //   <p className="text-accent-40">{item.description}</p>
            // </li>
            <li
              className="bg-primary-100 rounded-sm p-3 transition duration-300 relative overflow-hidden group hover:shadow-lg hover:brightness-110"
              key={item.title}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 pointer-events-none rounded-sm" />
              <h3 className="text-xl text-secondary-30 mb-7">{item.title}</h3>
              <p className="text-accent-40">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
