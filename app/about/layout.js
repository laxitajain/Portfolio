import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid sm:grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="px-2 py-1 ">{children}</div>
    </div>
  );
}
