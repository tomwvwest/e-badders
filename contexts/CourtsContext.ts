import { Action } from "@/hooks/reducer/useCourtReducer/useCourtTypes";
import { ActiveCourts } from "@/types/court.types";
import { ActionDispatch, createContext } from "react";

export type CourtContextType = {
  courtsState: ActiveCourts,
  courtsDispatch: ActionDispatch<[action: Action]>;
};

export const CourtContext = createContext<CourtContextType | null>(null);
