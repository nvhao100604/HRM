import { useReducer, type ReactElement } from "react";
import reducer, { initUIState } from "./state/reducers";
import Context from "./Context";


function Provider({ children }: { children: ReactElement }) {

   const [state, dispatch] = useReducer(reducer, initUIState);
   return (
      <Context.Provider value={[state, dispatch]}>
         {children}
      </Context.Provider>
   )
}

export default Provider;