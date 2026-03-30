import { Action } from "@/hooks/reducer/useCourtReducer";
import { ActiveCourts } from "@/types/court.types";
import { ActionDispatch, createContext } from "react";

export type CourtContextType = {
  courtDispatch: ActionDispatch<[action: Action]>;
};

export const CourtContext = createContext<CourtContextType | null>(null);
