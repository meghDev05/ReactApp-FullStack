
import { useContext, useEffect } from "react";
import { MyContext } from "../../App";

const Dashboard = () => {

    const context = useContext(MyContext);

     useEffect(()=>{
        context.setIsHideSidebarAndHeader(false);
    },[]);

    return(
        <>
            <div className="right-content w-100">
                <div className="dashboardBoxWrapper d-flex ">
                    <h1>Welcome Devansh</h1>
                </div>
            </div>
        </>
    )
}

export default Dashboard;