import { firebase } from '../firebase/config';
import { randomUUID } from 'crypto';

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
        credits: 1,
        verified: verified,
        creditsBreakdown: [{ credits: 1, for: "Website signup", date: finalDate },],
        role: role,
    };

    await userRef.set(newUserDocData)

    await firebase.firestore().collection('users').doc('allUsers').update(
        {
            [user.displayName]: user.uid

        }
    )
    return newUserDocData;
}

async function registerAlternateUser(name, email, role, verified) {
    let id = "alt_" + name.toLowerCase().replace(" ", "_") + (Math.round(Math.random() * 1000));
    const userRef = firebase.firestore().collection('users').doc(id);
    let signUpDate = new Date();

    let date = signUpDate.getDate();
    let month = signUpDate.getMonth() + 1;
    let year = signUpDate.getFullYear();

    let finalDate = month + "-" + date + "-" + year;
    const newUserDocData = {
        displayName: name,
        email: email,
        credits: 1,
        verified: verified,
        creditsBreakdown: [{ credits: 1, for: "Website signup", date: finalDate },],
        role: role,
    };

    console.log(id)
    await userRef.set(newUserDocData)

    await firebase.firestore().collection('users').doc('allUsers').update(
        {
            [name]: id

        }
    )
    return newUserDocData;
}

async function getAllUser() {
    const userRef = firebase.firestore().collection('users').doc('allUsers');
    const userSnapshot = await userRef.get();

    return userSnapshot.data();
}

async function updateCreds(uid, addCredits, reason) {
    const userRef = firebase.firestore().collection('users').doc(uid);

    let curDate = new Date();

    let date = curDate.getDate();
    let month = curDate.getMonth() + 1;
    let year = curDate.getFullYear();

    let finalDate = month + "-" + date + "-" + year;

    let breakDown = [
        { credits: addCredits, for: reason, date: finalDate }
    ];


    await userRef.update({
        credits: firebase.firestore.FieldValue.increment(addCredits),
        creditsBreakdown: firebase.firestore.FieldValue.arrayUnion(...breakDown)
    });

    return;

}

async function updatePermissions(uid, role, verified) {
    const userRef = firebase.firestore().collection('users').doc(uid);

    await userRef.update({
        role: role,
        verified: verified,
    });
}

async function resetAllCredits() {
    const usersMap = await getAllUser();
    const uids = Object.values(usersMap || {});

    const curDate = new Date();
    const date = curDate.getDate();
    const month = curDate.getMonth() + 1;
    const year = curDate.getFullYear();
    const finalDate = month + "-" + date + "-" + year;
    
    const CHUNK = 500; // fb limit
    const newBreakdown = [{ credits: 1, for: "Website signup", date: finalDate }];
    const failed = [];

    for (let i = 0; i < uids.length; i += CHUNK) {
        const batch = firebase.firestore().batch();
        const chunk = uids.slice(i, i + CHUNK);

        chunk.forEach((uid) => {
            const userRef = firebase.firestore().collection('users').doc(uid);
            batch.set(userRef, {
                credits: 1,
                creditsBreakdown: newBreakdown
            }, {
                merge: true
            });
        });

        try {
            await batch.commit();
        } catch (e) {
            console.error('batch commit failed for chunk starting at', i, e);
            failed.push(...chunk);
        }
    }

    if (failed.length) {
        console.warn('some updates failed', failed.length, 'uids');
    }

    return failed;
}


export { getUser, registerUserDoc, updateCreds, getAllUser, updatePermissions, registerAlternateUser, resetAllCredits };