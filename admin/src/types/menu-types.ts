interface ISidebarItem {
  id: number;
  icon: React.ElementType; 
  link: string; 
  title?: string; 
  label?: string; 
}

interface ISidebarMenus {
  title: string;
  items: Array<ISidebarItem>;
}
