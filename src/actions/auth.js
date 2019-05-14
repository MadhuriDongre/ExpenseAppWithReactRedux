import { firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider } from '../firebase/firebase';

export const startLoginWithGoogle =()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLoginWithFacebook =()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    }
}

export const startLoginWithTwitter =()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(twitterAuthProvider);
    }
}

export const startLoginWithEmail =(email,password)=>{
    return ()=>{
        return firebase.auth().signInWithEmailAndPassword(email,password)
    }
}

export const startSignupWithEmail =(email,password)=>{
    return ()=>{
        return firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>console.log('Signup Successful!!'))
            .catch((err)=>console.log('Signup Failed!!!', err.code))
    }
}

export const resetPassword =(email)=>{
    return ()=>{
        return firebase.auth().sendPasswordResetEmail(email)
    }
}

export const startLogout =()=>{
    return ()=>{
        return firebase.auth().signOut();
    }
}

export const login = (uid)=>({
    type:'LOGIN',
    uid
})

export const logout = ()=>({
    type:'LOGOUT'
})