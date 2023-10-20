import { Spin } from "antd";
import { userModel } from "entities/user";
import { Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "shared/lib";

export const withRouter=(component:()=>React.ReactNode)=>()=>
{
   
    return(  <BrowserRouter>
        <Suspense
        fallback={<Spin delay={300} size="large"></Spin>}
        >
            {component()}
        </Suspense>
    </BrowserRouter>
)
}
  