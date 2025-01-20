import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(en|ua)/:path*",
    "/((?!_next|_vercel|api|.*\\..*).*)", // Exclude API routes
  ],
};
