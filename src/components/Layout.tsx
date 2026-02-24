import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className="lg:ml-64">
        <div className="min-h-screen">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
