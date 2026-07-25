type PrimaryButtonProps = {
  text: string;
  onClick: () => void;
  padding?: number | [number, number] | undefined;
  extraClasses?: string;
  bgColour?: string;
};

export default function PrimaryButton({
  text,
  onClick,
  padding = undefined,
  extraClasses = "",
  bgColour = "bg-white",
}: PrimaryButtonProps) {
  const paddingStyling = getPaddingClasses(padding);

  return (
    <button
      className={`hover:cursor-pointer rounded-md transition border ${bgColour} ${paddingStyling} ${extraClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function getPaddingClasses(padding?: number | [number, number]): string {
  if (padding === undefined) {
    return "px-1 py-1";
  }

  if (Array.isArray(padding)) {
    const [x, y] = padding;
    return `px-${x} py-${y}`;
  }

  return `px-${padding} py-${padding}`;
}
