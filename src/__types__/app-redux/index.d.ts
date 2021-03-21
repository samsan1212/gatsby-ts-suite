// store state
import { Store } from "./store"

declare global {
  type ReduxStore = Readonly<Store>
}
