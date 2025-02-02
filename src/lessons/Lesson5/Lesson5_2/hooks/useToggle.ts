import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, toggle];
};
