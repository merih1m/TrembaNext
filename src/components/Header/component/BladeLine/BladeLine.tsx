const BladeIcon = "/image-removebg-preview (1) 1.svg";

export default function BladeLine() {
  return (
    <div className="flex flex-row items-center bg-gradient-to-b from-headerBg">
      <div
        className="h-[1px] w-1/6 bg-amber-50 -mr-2.5  drop-shadow-customBottom"
        style={{ filter: "drop-shadow(0 10px 5px #610094" }}
      />
      <img
        className="size-9 drop-shadow-customBottom"
        src={BladeIcon}
        alt="BladeIcon"
        style={{ filter: "drop-shadow(0 0 5px #610094" }}
      />
      <div
        className="h-[1px] w-dvw bg-amber-50 -ml-2.5 drop-shadow-customBottom"
        style={{ filter: "drop-shadow(0 10px 5px #610094" }}
      />
    </div>
  );
}
