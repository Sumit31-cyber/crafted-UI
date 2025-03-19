import React from "react";
import Svg, {
  ClipPath,
  Defs,
  G,
  Image,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Rect,
  Stop,
  Use,
  Circle,
  RadialGradient,
  Polygon,
  Ellipse,
} from "react-native-svg";

export const HomeIcon = ({ size, tint = "#111" }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
          stroke={tint}
          strokeWidth={1.5}
        />
        <Path
          d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
          stroke={tint}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
export const BagIcon = ({ size, tint = "#111" }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M20.2059 14.9709C19.6687 17.6567 19.4001 18.9996 18.5127 19.8646C18.3486 20.0244 18.1712 20.1699 17.9823 20.2994C16.9601 21 15.5906 21 12.8515 21H11.1486C8.40956 21 7.04004 21 6.01786 20.2994C5.82894 20.1699 5.65149 20.0244 5.48746 19.8646C4.59999 18.9996 4.33141 17.6567 3.79424 14.9709C3.02304 11.1149 2.63744 9.18686 3.5251 7.82067C3.68582 7.5733 3.87342 7.34447 4.08447 7.13836C5.25004 6 7.21622 6 11.1486 6H12.8515C16.7839 6 18.7501 6 19.9157 7.13836C20.1267 7.34447 20.3143 7.5733 20.475 7.82067C20.9861 8.60728 21.0751 9.58013 20.9114 11"
          stroke={tint}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
        <Circle cx={15} cy={10} r={1} fill={tint} />
        <Circle cx={9} cy={10} r={1} fill={tint} />
        <Path
          d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6"
          stroke={tint}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
export const GraphIcon = ({ size, tint = "#111" }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
          stroke={tint}
          strokeWidth={1.5}
        />
        <Path
          d="M7 14L8.79689 11.8437C9.50894 10.9893 9.86496 10.562 10.3333 10.562C10.8017 10.562 11.1577 10.9893 11.8698 11.8437L12.1302 12.1563C12.8423 13.0107 13.1983 13.438 13.6667 13.438C14.135 13.438 14.4911 13.0107 15.2031 12.1563L17 10"
          stroke={tint}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
export const StarIcon = ({ size, tint = "#111" }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
          stroke={tint}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};
export const UserIcon = ({ size, tint = "#111" }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke={tint}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
export const MenuIcon = ({ size, tint = "#111" }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <G id="Menu / Menu_Alt_05">
          <Path
            id="Vector"
            d="M5 17H13M5 12H19M11 7H19"
            stroke={tint}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
    </Svg>
  );
};
export const Logo = ({ size = 70, tint = "#111" }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 113 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M39.1152 30C39.1152 13.4315 52.5467 0 69.1152 0H73.8845V75C73.8845 91.5685 60.453 105 43.8845 105H39.1152V30Z"
        fill="#F99C69"
      />
      <Path
        d="M0 0H4.76923C21.3378 0 34.7692 13.4315 34.7692 30V105H30C13.4315 105 0 91.5685 0 75V0Z"
        fill="#F99C69"
      />
      <Path
        d="M78.231 0H83.0002C99.5687 0 113 13.4315 113 30V105H108.231C91.6624 105 78.231 91.5685 78.231 75V0Z"
        fill="#F99C69"
      />
    </Svg>
  );
};
export const Fire = ({ size = "100%", tint = "#111", strokeColor = tint }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z"
          fill={tint}
          stroke={strokeColor}
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};
export const FilterIcon = ({ size = 20, tint = "#111", strokeWidth = 1 }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="SVGRepo_bgCarrier" strokeWidth={0} />
      <G
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G id="SVGRepo_iconCarrier">
        <Path
          d="M10 8L20 8"
          stroke={tint}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Path
          d="M4 16L14 16"
          stroke={tint}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Ellipse
          cx={7}
          cy={8}
          rx={3}
          ry={3}
          transform="rotate(90 7 8)"
          stroke={tint}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <Ellipse
          cx={17}
          cy={16}
          rx={3}
          ry={3}
          transform="rotate(90 17 16)"
          stroke={tint}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </G>
    </Svg>
  );
};
