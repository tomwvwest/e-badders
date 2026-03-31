import { Action } from "@/hooks/reducer/useCourtReducer/useCourtReducer";
import { ActiveCourts } from "@/types/court.types";
import { ActionDispatch, createContext } from "react";

export type CourtContextType = {
  courtsState: ActiveCourts,
  courtDispatch: ActionDispatch<[action: Action]>;
};

export const CourtContext = createContext<CourtContextType | null>(null);
