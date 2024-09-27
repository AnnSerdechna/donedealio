import { FC, SVGProps } from "react";
import Logo from "./logo.svg";

const icons = {
  logo: Logo,
};

type SvgIconProps = SVGProps<SVGSVGElement> & { type: keyof typeof icons };

export const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null;

  return Icon && <Icon {...svgProps} />;
};