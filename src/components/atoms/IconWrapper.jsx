import { Icon } from "@iconify/react";

export default function IconWrapper({ name, className = "" }) {
  return <Icon icon={name} className={className} />;
}