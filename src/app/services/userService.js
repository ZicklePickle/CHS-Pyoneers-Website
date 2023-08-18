import { auth, provider, firebase } from '../firebase/config';

async function getUser(id) {
    const userRef = firebase.firestore().collection('users').doc(id);
    const userSnapshot = await userRef.get();

    return userSnapshot;
}

async function registerUserDoc(user, role, verified) {
    const userRef = firebase.firestore().collection('users').doc(user.uid);
    let signUpDate = new Date();

    let date = signUpDate.getDate();
    let month = signUpDate.getMonth() + 1;
    let year = signUpDate.getFullYear();

    let finalDate = month + "-" + date + "-" + year;
    const newUserDocData = {
        displayName: user.displayName,
        email: user.email,
        credits: 0,
        verified: verified,
        creditsBreakdown: [{ credits: 0, for: "Website signup", date: finalDate },],
        role: role,
    };

    await userRef.set(newUserDocData)    
    return newUserDocData;
}

export { getUser, registerUserDoc }