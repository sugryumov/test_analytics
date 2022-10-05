import { SVG_ICONS } from "../../constants/SVGIcons";
import { ISvgIcon } from "../../models/ISvgIcon";
import Arrow from "./Arrow";

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case SVG_ICONS.ARROW:
      return <Arrow {...props} />;

    default:
      return null;
  }
};

const SVGIcon = ({
  name = "",
  width = "100%",
  height = "100%",
  fill,
}: ISvgIcon) => getPath(name, { width, height, fill });

export default SVGIcon;
