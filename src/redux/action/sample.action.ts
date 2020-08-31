import { toActionCreator } from "@/redux/helper"
import { SET_ACTION } from "./type/types";

export const setAction = toActionCreator<number>(SET_ACTION);
