import { Pam2024DataGrid } from "./mainDataGrid/Pam2024DataGrid.tsx";

const PamHome = () => {

   return (
      <div
        // className={'bg-amber-100'}
        style={{ height : 'calc(100vh - 65px)' }}
      >
            <Pam2024DataGrid/>
      </div>
   )
}

export default PamHome;
