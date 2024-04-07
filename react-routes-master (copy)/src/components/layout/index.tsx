import { Outlet } from "react-router-dom";
import { Header } from "../header";


export function Layout(){
  return(
    <>
      <div className="bg-secondary-subtle"  style={{ minHeight: '100vh' }}>
        <Header/>
        <div className="mt-5">
          <Outlet/>
        </div>
      </div>
    </>
  )
}
