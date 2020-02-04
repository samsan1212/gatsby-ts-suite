import { actionCreator } from "@/redux/helper"
import { SET_ACTION } from "./type/types";

export const setAction = actionCreator<number>(SET_ACTION);
