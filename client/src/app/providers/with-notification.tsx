import { useEffect } from "react"
import { useAppSelector } from "shared/lib"
import { NotificationForm } from "widgets/auth/ui/notification-form"
import { TypesNotices } from "widgets/auth/ui/notification-form/ui"
import { LoadingForm } from "widgets/loadingForm"

export const withNotification=(component:()=>React.ReactNode)=>()=>
{
    const {answer,isError,isSuccess,isFetching} = useAppSelector(state=>state.response)
    useEffect(()=>{
        console.log(answer,isError,isSuccess);
        
    })
    return(  
        <>
            <NotificationForm text={answer} type={isSuccess?TypesNotices.Success:TypesNotices.Error}/>
            {isFetching&&<LoadingForm/>}
            {component()}
        </>
            
)
}