export const Search = ({ size = 50 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={size}
    height={size}
    viewBox="0,0,256,256"
  >
    <g
      fill="#fafafa"
      fillRule="nonzero"
      stroke="none"
      strokeWidth={1}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      strokeDasharray=""
      strokeDashoffset={0}
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      style={{ mixBlendMode: "normal" }}
    >
      <g transform="scale(10.66667,10.66667)">
        <path d="M10,2c-4.41236,0 -8,3.58764 -8,8c0,4.41236 3.58764,8 8,8c2.02665,0 3.87421,-0.76179 5.28516,-2.00781l6.36133,6.36133c0.12541,0.13061 0.31163,0.18321 0.48684,0.13753c0.17521,-0.04568 0.31204,-0.18251 0.35772,-0.35772c0.04568,-0.17521 -0.00693,-0.36143 -0.13753,-0.48684l-6.36133,-6.36133c1.24603,-1.41095 2.00781,-3.25851 2.00781,-5.28516c0,-4.41236 -3.58764,-8 -8,-8zM10,3c3.87192,0 7,3.12808 7,7c0,3.87192 -3.12808,7 -7,7c-3.87192,0 -7,-3.12808 -7,-7c0,-3.87192 3.12808,-7 7,-7z" />
      </g>
    </g>
  </svg>
);

export const Map = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-map-pin"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx={12} cy={10} r={3} />
  </svg>
);
