import { withNotification } from "app/providers/with-notification";
import LoginForm  from "widgets/auth/ui/login-form/ui";
const LoginPage = () => {
    return (
        <div style={{height:'100vh'}}>
            <LoginForm/>
        </div>
       
    );
};

export default withNotification(LoginPage);