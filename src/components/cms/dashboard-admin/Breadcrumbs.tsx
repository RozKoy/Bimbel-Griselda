import React from "react";
import Link from "next/link";

interface Breadcrumb {
  text: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <nav className="flex " aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2  ">
        {crumbs.map((crumb, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && (
              <div className="flex items-center mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                >
                  <path
                    d="M7.90198 15.5317C7.71734 15.5321 7.5384 15.4678 7.39623 15.3499C7.31621 15.2836 7.25007 15.2021 7.20158 15.1102C7.1531 15.0182 7.12323 14.9176 7.11369 14.8141C7.10415 14.7106 7.11512 14.6063 7.14597 14.507C7.17683 14.4078 7.22696 14.3156 7.2935 14.2357L10.8338 10L7.41994 5.75641C7.35429 5.67557 7.30527 5.58256 7.27569 5.48273C7.24611 5.38289 7.23656 5.27819 7.24757 5.17464C7.25859 5.0711 7.28996 4.97075 7.33988 4.87937C7.3898 4.78799 7.45729 4.70738 7.53847 4.64216C7.62024 4.57022 7.71599 4.51596 7.81972 4.48278C7.92344 4.4496 8.03291 4.43821 8.14125 4.44934C8.24959 4.46047 8.35445 4.49388 8.44927 4.54746C8.54408 4.60104 8.6268 4.67364 8.69223 4.7607L12.5091 9.50215C12.6253 9.64355 12.6889 9.82092 12.6889 10.004C12.6889 10.187 12.6253 10.3644 12.5091 10.5058L8.55789 15.2472C8.47861 15.3428 8.37791 15.4184 8.26395 15.4679C8.14999 15.5173 8.02598 15.5392 7.90198 15.5317Z"
                    fill="#2B2E34"
                  />
                </svg>
              </div>
            )}
            {crumb.href ? (
              <Link href={crumb.href}>
                <p className=" text-lg font-medium text-black ">{crumb.text}</p>
              </Link>
            ) : (
              <span className="text-lg font-normal text-[#FFC436]">
                {crumb.text}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
