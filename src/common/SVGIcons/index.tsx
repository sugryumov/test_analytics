export const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={10} height={6} {...props}>
    <path
      d="M7.309 1.154C7.063 1.4 4.475 3.8 4.475 3.8a.674.674 0 0 1-.95 0S.935 1.4.69 1.155a.685.685 0 0 1 0-.95c.262-.262.628-.282.95 0l2.358 2.203L6.358.204c.321-.282.688-.262.95 0a.685.685 0 0 1 0 .95Z"
      fill="#AAB7D4"
    />
  </svg>
);

export const Spinner = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      style={{
        margin: 'auto',
      }}
      width={50}
      height={50}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <path d="M10 50a40 40 0 0080 0 40 42 0 01-80 0" fill="crimson">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        />
      </path>
    </svg>
  );
};
