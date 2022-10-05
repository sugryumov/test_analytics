import { cardIcons, otherIcons } from '../../enums/svgIcons';
import { ISvgIcon } from '../../models/ISvgIcon';
import { Total, Won, Lost, Leads, Tasks, Completed, Expired, Empty } from './cards';
import { Arrow, Spinner } from './other';

const getPath = (name: string, props: ISvgIcon) => {
  switch (name) {
    case cardIcons.Won:
      return <Won />;

    case cardIcons.Total:
      return <Total />;

    case cardIcons.Lost:
      return <Lost />;

    case cardIcons.Leads:
      return <Leads />;

    case cardIcons.Tasks:
      return <Tasks />;

    case cardIcons.Completed:
      return <Completed />;

    case cardIcons.Expired:
      return <Expired />;

    case cardIcons.Empty:
      return <Empty />;

    case otherIcons.Spinner:
      return <Spinner />;

    case otherIcons.Arrow:
      return <Arrow />;

    default:
      return <svg />;
  }
};

const SVGIcon = ({ name = '', width = '100%', height = '100%', fill }: ISvgIcon) =>
  getPath(name, { width, height, fill });

export default SVGIcon;
