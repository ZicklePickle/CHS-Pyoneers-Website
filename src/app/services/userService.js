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

async function getAllUser() {
    const snapshot = await firebase.firestore().collection("users").get()
    return snapshot.docs.map(user => user.data());
}

async function updateCreds(user,currentCredits,addCredits,reason) {
    const userRef = firebase.firestore().collection('users').doc(user.uid);

    let totalCredits = addCredits+currentCredits;

    let curDate = new Date();

    let date = curDate.getDate();
    let month = curDate.getMonth() + 1;
    let year = curDate.getFullYear();

    let finalDate = month + "-" + date + "-" + year;

    let breakDown = [
        { credits: addCredits, for: reason, date: finalDate }
    ];

  
    await userRef.update({
        credits: totalCredits,
        creditsBreakdown: firebase.firestore.FieldValue.arrayUnion(...breakDown)
    });

    return totalCredits; 
    
}

export { getUser, registerUserDoc, updateCreds,getAllUser }