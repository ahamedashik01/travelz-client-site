import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { handleLoginWithEmail, setUser, setError, setIsLoading, signInUsingGoogle, takingEmail, takingPassword, error } = useAuth();
    const location = useLocation();
    let history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const useHandleLoginWithEmail = e => {
        setIsLoading(true);
        e.preventDefault();
        handleLoginWithEmail()
            .then(result => {
                setUser(result.user);
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    const UseSignInUsingGoogle = () => {
        setIsLoading(true)
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    return (
        <div className="login-form quality">
            <div className="form">
                <h2>Login</h2>
                <form onSubmit={useHandleLoginWithEmail} >
                    <input onBlur={takingEmail} className="input" type="email"
                        placeholder="Your Email" />
                    <br />
                    <input onBlur={takingPassword} className="input" type="password"
                        placeholder="Password" />
                    <div className="text-danger">{error}</div>
                    <br />
                    <input className="btn btn-dark rounded-pill text-white px-4" type="submit" value="Log In" />
                </form>
                <p className="my-4">New to Travelz? <br /> <Link to="/registration">Create Account</Link></p>
                <div>Or</div>
                <hr />
                <button onClick={UseSignInUsingGoogle} className="btn btn-dark  rounded-pill px-4 text-white"><i className="fab fa-google me-3"> Google Sign In</i></button>
            </div>
        </div >
    );
};

export default Login;