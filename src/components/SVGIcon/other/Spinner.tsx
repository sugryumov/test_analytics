const Spinner = () => (
  <svg
    style={{
      margin: 'auto',
    }}
    width={50}
    height={50}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
  >
    <path d="M10 50a40 40 0 0080 0 40 42 0 01-80 0" fill="#3d8fec">
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

export default Spinner;
