import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


// email & pass authentication 
const Register = () => {
    const { handleRegistration, takingName, handleEmailChange, signInUsingGoogle, handlePasswordChange, error } = useAuth();



    return (
        <div className="login-form quality">
            <div className="form">
                <h2>Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onChange={takingName} className="input" type="text"
                        placeholder="Your Name" />
                    <br />
                    <input onBlur={handleEmailChange} className="input" type="email"
                        placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} className="input" type="password"
                        placeholder="Your Password" />
                    <br />
                    <input className="input" type="password"
                        placeholder="Re-enter Password" />
                    <div className="text-danger">{error}</div>
                    <br />
                    <input className="btn btn-dark rounded-pill text-white px-4 mt-3" type="submit" value="Submit" />
                </form>
                <p className="my-4">Already have an account? <br /> <Link to="/login"> Login here</Link></p>
                <div>Or</div>
                <hr />
                <button onClick={signInUsingGoogle} className="btn btn-dark rounded-pill px-4 text-white"><i className="fab fa-google me-3"> Google Sign In</i></button>

            </div>
        </div>
    );
};

export default Register;