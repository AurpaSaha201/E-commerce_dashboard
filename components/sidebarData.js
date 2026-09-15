import {LayoutDashboard,Bot,ShoppingCart,Calendar,User,ListTodo,FilePenLine,Table2,Files,PanelsTopLeft,MessageCircle,Headphones,Mail,ChartPie,MapPinned,Cuboid,Plug,} from "lucide-react";
export const menuItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,

    children: [
      {
        title: "Ecommerce",
        href: "/ecommerce",
        active: true,
      },

      {
        title: "Analytics",
        href: "/analytics",
      },

      {
        title: "Marketing",
        href: "/marketing",
      },

      {
        title: "CRM",
        href: "/crm",
      },

      {
        title: "Stocks",
        href: "/stocks",
      },

      {
        title: "SaaS",
        href: "/saas",
      },

      {
        title: "Logistics",
        href: "/logistics",
      },

      {
        title: "AI",
        href: "/ai",
        badge: "NEW",
      },

      {
        title: "Sales",
        href: "/sales",
        badge: "NEW",
      },

      {
        title: "Finance",
        href: "/finance",
        badge: "NEW",
      },
    ],
  },


  {
    title: "AI Assistant",
    href: "/ai-assistant",
    icon: Bot,
    badge: "NEW",
    arrow: true,

    children: [
      {
        title: "Text Generator",
        href: "/textgenerator",
      },

      {
        title: "Image Generator",
        href: "/imagegenerator",
      },

      {
        title: "Code Generator",
        href: "/codegenerator",
      },

      {
        title: "Video Generator",
        href: "/videoenerator",
      },
    ],
  },



  {
    title: "E-commerce",
    href: "/ecommerce",
    icon: ShoppingCart,
    arrow: true,

       children: [
      {
        title: "Product",
        href: "/product",
      },

      {
        title: "Add product",
        href: "/addproduct",
      },

      {
        title: "Billing",
        href: "/billing",
      },

      {
        title: "Invoices",
        href: "/invoices",
      },
       {
        title: "Transitions",
        href: "/transitions",
      },
    ],
   
  },


  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },


  {
    title: "User Profile",
    href: "/profile",
    icon: User,
  },


  {
    title: "Task",
    href: "/task",
    icon: ListTodo,
    arrow: true,

       children: [
      {
        title: "List",
        href: "/list",
      },

      {
        title: "Kanban",
        href: "/kanban",
      },
    ],
  },


  {
    title: "Forms",
    href: "/forms",
    icon: FilePenLine,
    arrow: true,
       children: [
      {
        title: "Form-Element",
        href: "/formelement",
      },

      {
        title: "Form-Layout",
        href: "/formlayout",
      },
    ],
  },


  {
    title: "Tables",
    href: "/tables",
    icon: Table2,
    arrow: true,
       children: [
      {
        title: "Basic Tables",
        href: "/basictables",
      },

      {
        title: "Data Tables",
        href: "/datatables",
      },
    ],
  },


  {
    title: "Pages",
    href: "/pages",
    icon: Files,
    arrow: true,
       children: [
      {
        title: "File Manager",
        href: "/filemanager",
      },

      {
        title: "API keys",
        href: "/apikeys",
      },
      {
        title: "FAQ",
        href: "/faq",
      },

      {
        title: "Integration",
        href: "/integration",
      },
      {
        title: "Blank",
        href: "/blank",
      },

      {
        title: "404 Error",
        href: "/error",
      },
      {
        title: "Coming Soon",
        href: "/comingsoon",
      },

      {
        title: "Maintenance",
        href: "/maintenance",
      },
    ],
  },


  {
    title: "Layouts",
    href: "/layouts",
    icon: PanelsTopLeft,
    badge: "NEW",
    arrow: true,
     children: [
      {
        title: "Layout One",
        href: "/layoutone",
      },

      {
        title: "Layout Two",
        href: "/layouttwo",
      },
      {
        title: "Layout Three",
        href: "/Layoutthree",
      },
    ],
  },

];


/*SUPPORT*/

export const supportItems = [

  {
    title: "Chat",
    href: "/chat",
    icon: MessageCircle,
  },


  {
    title: "Support Ticket",
    href: "/support-ticket",
    icon: Headphones,
    badge: "NEW",
    arrow: true,
     children: [
      {
        title: "Ticket List",
        href: "/ticketlist",
      },

      {
        title: "Ticket Reply",
        href: "/ticketreply",
      },
    ],
  },


  {
    title: "Email",
    href: "/email",
    icon: Mail,
    arrow: true,
      children: [
      {
        title: "Inbox",
        href: "/inbox",
      },

      {
        title: "Details",
        href: "/details",
      },
    ],
  },

];


/*OTHERS*/

export const otherItems = [

  {
    title: "Charts",
    href: "/charts",
    icon: ChartPie,
    badge: "NEW",

    children: [

      {
        title: "Line Chart",
        href: "/charts/line",
      },

      {
        title: "Bar Chart",
        href: "/charts/bar",
      },

      {
        title: "Pie Chart",
        href: "/charts/pie",
      },

      {
        title: "Radar Chart",
        href: "/charts/radar",
      },

      {
        title: "Radial Chart",
        href: "/charts/radial",
      },

    ],
  },


  {
    title: "Maps",
    href: "/maps",
    icon: MapPinned,
    badge: "NEW",
    arrow: true,
      children: [
      {
        title: "Maps",
        href: "/maps",
      },

      {
        title: "Vector maps",
        href: "/vectormaps",
      },
    ],
  },


  {
    title: "UI Elements",
    href: "/ui-elements",
    icon: Cuboid,
    arrow: true,
      children: [
      {
        title: "Alert",
        href: "/alert",
      },

      {
        title: "Button",
        href: "/button",
      },
       {
        title: "Badge",
        href: "/badge",
      },

      {
        title: "Card",
        href: "/card",
      },
       {
        title: "Link",
        href: "/link",
      },

      {
        title: "List",
        href: "/list",
      },
       {
        title: "Modals",
        href: "/modals",
      },

      {
        title: "Notification",
        href: "/notificaton",
      },
    ],
  },


  {
    title: "Authentication",
    href: "/authentication",
    icon: Plug,
    arrow: true,
      children: [
      {
        title: "Sign In",
        href: "/signin",
      },

      {
        title: "Sign Up",
        href: "/signup",
      },
       {
        title: "Reset Password",
        href: "/resetpassword",
      },

      {
        title: "Two Step Verification",
        href: "/teostepverification",
      },
    ],
  },

];