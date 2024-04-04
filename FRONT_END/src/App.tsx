import "./App.css";
import MyDrawer from "./applications/common/AppDrawer/MyDrawer.tsx";
// import { useAppDispatch } from "./redux/hooks.ts";

function App() {
  // const dispatch = useAppDispatch()
  //
  // let tokenRefreshTimeout;
  //
  // const MAX_INACTIVITY_TIME : number = 60 * 15 * 1000; // 15 minutes

  function resetTokenRefreshTimeout() {
    // clearTokenRefreshTimeout();
    // tokenRefreshTimeout = setTimeout(() => {
    //     handleUserInactivity();
    // }, MAX_INACTIVITY_TIME);
    // dispatch(setExpirationTime(Date.now() + MAX_INACTIVITY_TIME))
  }

  // function clearTokenRefreshTimeout() {
  //     if (tokenRefreshTimeout) {
  //         clearTimeout(tokenRefreshTimeout);
  //     }
  // }

  return (
    <div
      onMouseDown={resetTokenRefreshTimeout}
      onKeyDown={resetTokenRefreshTimeout}
    >
      <MyDrawer />
    </div>
  )
}

export default App;
