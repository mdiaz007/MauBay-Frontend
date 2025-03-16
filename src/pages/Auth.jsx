import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui"
import { AuthPage } from 'supertokens-auth-react/ui';

function Auth() {

    return (
        <div className="AuthPage">
            <AuthPage preBuiltUIList={[EmailPasswordPreBuiltUI]} />
        </div>
    )
}

export default Auth
