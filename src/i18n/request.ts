import { getRequestConfig } from "next-intl/server";
import { routing } from "../navigation";

export default getRequestConfig(async ({ locale }) => {
  // Safe fallback
  const currentLocale = locale || routing.defaultLocale;
  
  return {
    locale: currentLocale,
    messages: (await import(`../messages/${currentLocale}.json`)).default,
  };
});
