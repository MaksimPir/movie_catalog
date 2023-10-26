import { withNotification } from "app/providers/with-notification";
import LoginForm  from "widgets/auth/ui/login-form/ui";
const LoginPage = () => {
    return (
        <LoginForm/>       
    );
};

export default withNotification(LoginPage);