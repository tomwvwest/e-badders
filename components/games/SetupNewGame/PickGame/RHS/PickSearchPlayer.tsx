import { UseFormRegister } from "react-hook-form";
import { FormValues } from "../PickGame";

export default function PickSearchPlayer({
  register,
}: {
  register: UseFormRegister<FormValues>;
}) {
  return (
    <form className="flex">
      <input className="w-full bg-white border-b p-1"
        {...register("searchValue")}
        placeholder="Search for a player..."
      />
    </form>
  );
}
