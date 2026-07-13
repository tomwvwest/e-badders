import { UseFormRegister } from "react-hook-form";
import { FormValues } from "./PickGame";

export default function PickSearchPlayer({
  register,
}: {
  register: UseFormRegister<FormValues>;
}) {
  return (
    <form className="flex gap-6">
      <input
        {...register("searchValue")}
        placeholder="Search for a player..."
      />
    </form>
  );
}
