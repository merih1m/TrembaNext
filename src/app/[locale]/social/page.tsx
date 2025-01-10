import { useTranslations } from "next-intl";

export default function SocialPage() {
  const t = useTranslations("Social");

  return (
    <div>
      <h1>{t("Social")}</h1>
    </div>
  );
}
