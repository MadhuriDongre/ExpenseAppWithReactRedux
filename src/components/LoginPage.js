import React , { useState }from 'react';
import { connect} from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook,startLoginWithTwitter, startLoginWithEmail , startSignupWithEmail, resetPassword} from '../actions/auth';

export const LoginPage = ({startLoginWithGoogle, startLoginWithFacebook, startLoginWithTwitter, startLoginWithEmail, startSignupWithEmail , resetPassword}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password1,setPassword1] = useState('');
    const [error, setError]= useState('');
    const [message, setMessage]= useState('');
    const [showSignupPage, setShowSignupPage] = useState(false);

    const resetPasswordCall =()=>{
        if(email){
            resetPassword(email)
                .then(()=>setMessage('To reset Password, click the link provide in your registered Email Id'))
                .catch((err)=>setError(err))
        }
    }

    const loginWithEmail = (e)=>{
        e.preventDefault();
        if(!email){
            setError(`Email cannot be empty`);
        }
        else if(!password){
            setError(`Password cannot be empty`);
        }
        else{
            startLoginWithEmail( email, password )
            .then(()=>console.log('Login Successful!!'))
            .catch((err)=>{
                console.log('Login Failed!!!', err.code);
                setError(`Please provide correct Email/Password`);
            })
        }
    }

    const signUpWithEmail = (e)=>{
        e.preventDefault();
        if(!email){
            setError(`Email cannot be empty`);
        }
        else if(password!==password1){
            setError(`Passwords don't match`);
        }
        else{
            startSignupWithEmail( email, password )
        }
    }

    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control! </p>
                {!showSignupPage && 
                    <div>
                        <form className="form" onSubmit={ loginWithEmail } >
                            {error && <p className="form__error">{error}</p>}
                            {message && <p className="form__message">{message}</p>}
                            <input className="text-input text-input--login" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
                            <input className="text-input text-input--login" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                            <button className="button button--link button--login" type="submit">Log In</button>
                        </form>
                        <p className="form__text">Forgot Password? <button className="button_mini" onClick={resetPasswordCall}>Reset Password</button></p>
                        <p className="form__text">Don't have an account? <button className="button_mini" onClick={()=>setShowSignupPage(true)}>Sign up</button></p>
                        <p className="form__text">OR</p>
                        <p className="form__text">Login With</p>
                        <button className="button button--link" onClick={startLoginWithGoogle}><img src={'assets/icons8-google.svg'} alt="Logo" /></button>
                        <button className="button button--link" onClick={startLoginWithFacebook}><img src={'assets/icons8-facebook.svg'} alt="Logo" /></button>
                        <button className="button button--link" onClick={startLoginWithTwitter}><img src={'assets/icons8-twitter.svg'} alt="Logo" /></button>
                    </div>
                }
                {showSignupPage && 
                    <div>
                        <p>Register yourself</p>
                        <form className="form" onSubmit={ signUpWithEmail }>
                            {error && <p className="form__error">{error}</p>}
                            <input className="text-input text-input--login" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
                            <input className="text-input text-input--login" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                            <input className="text-input text-input--login" type="text" name="password" value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder="Confirm Password"/>
                            <button className="button button--link button--login" type="submit">Create Account</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    startLoginWithGoogle:()=>dispatch(startLoginWithGoogle()),
    startLoginWithFacebook:()=>dispatch(startLoginWithFacebook()),
    startLoginWithTwitter:()=>dispatch(startLoginWithTwitter()),
    startLoginWithEmail:(email,password)=>dispatch(startLoginWithEmail(email, password)),
    startSignupWithEmail:(email,password)=>dispatch(startSignupWithEmail(email, password)),
    resetPassword:(email)=>dispatch(resetPassword(email))
});

export default connect(undefined,mapDispatchToProps)(LoginPage);