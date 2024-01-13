export default function ShadowMaskot({className} :any) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="221"
      height="49"
      viewBox="0 0 221 49"
      fill="none"
    >
      <g filter="url(#filter0_f_715_145)">
        <ellipse cx="110.5" cy="24.5" rx="100.5" ry="14.5" fill="#D9D9D9" />
      </g>
      <defs>
        <filter
          id="filter0_f_715_145"
          x="0"
          y="0"
          width="221"
          height="49"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_715_145"
          />
        </filter>
      </defs>
    </svg>
  );
}
