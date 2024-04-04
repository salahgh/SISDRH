import {useLocation} from "react-router-dom";


const MainPage = () => {

   const location = useLocation()
   const person = location.state.person

   return (
      <>
         <div>
            this is the main page
         </div>
         <div>
            {
               JSON.stringify(person)
            }
         </div>
      </>
   )
}

export default MainPage