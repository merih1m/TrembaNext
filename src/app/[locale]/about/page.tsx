import { useTranslations } from "next-intl";

export default function about() {
  const t = useTranslations("About");

  return (
    <div>
      <h1>{t("about")}</h1>
    </div>
  );
}
