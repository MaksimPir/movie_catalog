import { withNotification } from "app/providers/with-notification";
import { useEffect } from "react";
import { useAppSelector } from "shared/lib";
import LoginForm  from "widgets/auth/ui/login-form/ui";
import {NotificationForm} from 'widgets/auth/ui/notification-form'
import { TypesNotices } from 'widgets/auth/ui/notification-form/ui';
const LoginPage = () => {
    return (
        <div>
            <LoginForm/>
        </div>
       
    );
};

export default withNotification( LoginPage);