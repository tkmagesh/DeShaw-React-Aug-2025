
import * as bugActionCreators from "../actions";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

function useBugsActions(){
  // creating action dispatchers
  const dispatch = useDispatch();
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);

  return bugActionDispatchers
}

export default useBugsActions;