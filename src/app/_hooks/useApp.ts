import { globalStateService } from "@services/globalStateService";
import { AppState } from "@models/common";

export const useApp = () => {
  const [state, setGlobalState] = globalStateService.use();
  return {
    ...state.app,
    setAppConfig: (config: Partial<AppState>) => {
      setGlobalState(prev => ({...prev, app: {...prev.app, ...config}}))
    }
  }
}
