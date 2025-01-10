import { useTranslations } from "next-intl";
export default function FundraisersPage() {
  const t = useTranslations("Fundraisers");

  return (
    <div>
      <h1>{t("Fundraisers")}</h1>
    </div>
  );
}
