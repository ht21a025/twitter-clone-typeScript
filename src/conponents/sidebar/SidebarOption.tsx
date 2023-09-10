import "./SidebarOption.css";

interface SidebarOptionProps {
    text: string;
    Icon: React.ElementType;
    active: boolean;
  }

function SidebarOption({ text, Icon, active }: SidebarOptionProps) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption