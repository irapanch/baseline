// "use client";
// import Cookies from "js-cookie";
// import { useLocale, useTranslations } from "next-intl";
// import { useEffect, useState } from "react";

// import { Link } from "@/i18n/routing";

// import Button from "../buttons/Button";

// export default function CookiesComponent() {
//   const [isAccepted, setIsAccepted] = useState(true);
//   const cookiesValue = Cookies.get("isAcceptedCookiesUkrpole");

//   const t = useTranslations("");
//   const locale = useLocale();

//   useEffect(() => {
//     if (cookiesValue) {
//       setIsAccepted(true);
//     } else {
//       setIsAccepted(false);
//     }
//   }, [isAccepted, cookiesValue]);

//   const handleClick = () => {
//     setIsAccepted(true);
//     Cookies.set("isAcceptedCookiesUkrpole", "true", { expires: 365 });
//   };

//   return (
//     <div
//       className={`fixed z-[60] left-0 bottom-0 flex items-center justify-center w-full max-h-[300px] tablet:max-h-[168px] laptop:max-h-[155px]
//        py-10 px-4 tab:px-9 laptop:px-[100px] bg-beige bg-cover ${
//          isAccepted ? "translate-y-[101%]" : "delay-[3000ms] translate-y-0"
//        }
//        transition-[transform] duration-[1000ms] ease-out`}
//     >
//       <div className="flex flex-col gap-y-8 tab:gap-y-0 items-start tab:flex-row tab:items-center tab:justify-between max-w-[1920px]">
//         <p className="tab:w-[65.2%] laptop:w-[74.6%]">
//           {t("cookies.description")}
//           <Link
//             href="/policy"
//             target="_blank"
//             locale={locale}
//             className="outline-none text-16med laptop:text-18med text-greenDark active:text-greenKhaki laptop:hover:text-greenKhaki
//              laptop:focus-visible:text-greenKhaki transition duration-300 ease-out"
//           >
//             {t("cookies.policy")}
//           </Link>
//           .
//         </p>

//         <Button onClick={handleClick}>{t("buttons.acceptCookies")}</Button>
//       </div>
//     </div>
//   );
// }
