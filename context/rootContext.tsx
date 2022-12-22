import { useReducer } from "react";
import { createContext } from "use-context-selector";

import { UPDATE_IS_LOGIN } from "./auth/action";

interface IState {
  isLogin: boolean;
}
interface IProps {
  children: React.ReactNode;
  initial?: IState;
}

const initialRootState = {
  isLogin: false,
};
type State = typeof initialRootState;
type Action = { type: string; payload: boolean };
type Dispatch = (action: Action) => void;

export function rootReducer(state: State, action: Action) {
  switch (action.type) {
    case UPDATE_IS_LOGIN:
      return { ...state, isLogin: action.payload };

    default:
      return state;
  }
}

const RootContext = createContext<[State, Dispatch]>([
  initialRootState,
  () => null,
]);

RootContext.displayName = "RootContext";

export function RootProvider({ children, initial = initialRootState }: IProps) {
  const [rootState, rootDispatch] = useReducer(rootReducer, initial);

  return (
    <RootContext.Provider value={[rootState, rootDispatch]}>
      {children}
    </RootContext.Provider>
  );
}

export default RootContext;
