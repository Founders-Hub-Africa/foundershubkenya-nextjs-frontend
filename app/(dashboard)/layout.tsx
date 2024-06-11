import Sidebar from "@/components/dashboard/layout/sidebar";
import ProfileSidebar from "@/components/dashboard/profile/profile-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="overflow-y-scroll max-h-screen w-[70vw]">{children}</div>
      <ProfileSidebar />
    </div>
  );
};

export default Layout;
