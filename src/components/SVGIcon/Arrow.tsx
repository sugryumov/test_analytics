import { ISvgIcon } from "../../models/ISvgIcon";

const Arrow = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
  >
    <path
      d="M7.309 1.154C7.063 1.4 4.475 3.8 4.475 3.8a.674.674 0 0 1-.95 0S.935 1.4.69 1.155a.685.685 0 0 1 0-.95c.262-.262.628-.282.95 0l2.358 2.203L6.358.204c.321-.282.688-.262.95 0a.685.685 0 0 1 0 .95Z"
      fill="#AAB7D4"
    />
  </svg>
);

export default Arrow;
