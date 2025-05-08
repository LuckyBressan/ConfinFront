import { Building2, Home, IdCard, User } from "lucide-react"
import { FaLandmarkFlag } from "react-icons/fa6";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Estados",
    url: "/estados",
    icon: FaLandmarkFlag,
  },
  {
    title: "Cidades",
    url: "/cidades",
    icon: Building2,
  },
  {
    title: "Pessoas",
    url: "/pessoas",
    icon: User,
  },
  {
    title: "Contas",
    url: "/contas",
    icon: IdCard,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="bg-zinc-50">
        <SidebarGroup>
          <SidebarGroupLabel>Páginas</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
