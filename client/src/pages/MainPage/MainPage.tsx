import { withNotification } from 'app/providers/with-notification';
import { useAppSelector } from 'shared/lib';

const MainPage = () => {
    const {user}=useAppSelector(state=>state.auth)
    return (
        <>
            <h1>
                Main Page
            </h1>
            <div>
                {user.email}
            </div>
        </>
    );
};

export default withNotification(MainPage);