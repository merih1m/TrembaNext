import { useTranslations } from "next-intl";

export default function SupportPage() {
  const t = useTranslations("Support");

  return (
    <div>
      <h1>{t("Support")}</h1>
    </div>
  );
}
