import Router from "./router";

import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <main className="w-full h-full p-3 flex flex-col relative">
          <Header />
          <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <Router />
                {/* <SectionCards /> */}
                {/* <div className="px-4 lg:px-6">
                  <ChartAreaInteractive />
                </div> */}
                {/* <DataTable data={data} /> */}
              </div>
            </div>
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}

export default App;
