import Link from "next/link";
const Ciggarete = "/image 3.svg";

export default function Logo() {
  return (
    <div className="ml-1">
      <Link
        href={"/"}
        className="flex justify-center items-center align-middle text-5xl text-shadow-custom "
      >
        Tremba
        <img
          src={Ciggarete}
          className="absolute top-[8px] left-[130px] w-[64px]"
          alt="Ciggarete"
        />
      </Link>
    </div>
  );
}
