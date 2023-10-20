import { useAppSelector } from "shared/lib"
import { NotificationForm } from "widgets/auth/ui/notification-form"
import { TypesNotices } from "widgets/auth/ui/notification-form/ui"

export const withNotification=(component:()=>React.ReactNode)=>()=>
{
    const {answer,isError,isSuccess} = useAppSelector(state=>state.response)
    return(  
        <>
            <NotificationForm text={answer} type={isSuccess?TypesNotices.Success:TypesNotices.Error}/>
            {component()}
        </>
            
)
}