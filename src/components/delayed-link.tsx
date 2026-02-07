import { Link, LinkProps } from "react-router-dom";
import { MouseEvent } from "react";
import { useDelayedNavigation } from "../hooks/useDelayedNavigation";

interface DelayedLinkProps extends Omit<LinkProps, "to"> {
  to: string;
  delay?: number;
  refresh?: boolean;
}

export const DelayedLink = ({
  to,
  delay = 300,
  refresh = false,
  onClick,
  ...props
}: DelayedLinkProps) => {
  const navigate = useDelayedNavigation(delay);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(e);
    navigate(to, { refresh });
  };

  return <Link to={to} onClick={handleClick} {...props} />;
};
