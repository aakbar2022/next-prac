function DownIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="32"
        y="32"
        width="32"
        height="32"
        rx="16"
        transform="rotate(180 32 32)"
        fill="#D5DEFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3536 19.3536C16.1583 19.5488 15.8417 19.5488 15.6464 19.3536L9.64645 13.3536C9.45118 13.1583 9.45118 12.8417 9.64645 12.6464C9.84171 12.4512 10.1583 12.4512 10.3536 12.6464L16 18.2929L21.6464 12.6464C21.8417 12.4512 22.1583 12.4512 22.3536 12.6464C22.5488 12.8417 22.5488 13.1583 22.3536 13.3536L16.3536 19.3536Z"
        fill="#222222"
      />
    </svg>
  );
}
function UpIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#222222" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6464 12.6464C15.8417 12.4512 16.1583 12.4512 16.3536 12.6464L22.3536 18.6464C22.5488 18.8417 22.5488 19.1583 22.3536 19.3536C22.1583 19.5488 21.8417 19.5488 21.6464 19.3536L16 13.7071L10.3536 19.3536C10.1583 19.5488 9.84171 19.5488 9.64645 19.3536C9.45118 19.1583 9.45118 18.8417 9.64645 18.6464L15.6464 12.6464Z"
        fill="white"
      />
    </svg>
  );
}

export { DownIcon, UpIcon };

