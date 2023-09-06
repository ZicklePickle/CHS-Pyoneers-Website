import { firebase } from '../firebase/config';


async function addAnnouncements(announcement,linkArr){
    const announcementRef = firebase.firestore().collection('config').doc('announcements');
    const finalAnnouncement = [{announcement:announcement,link:linkArr}];
    await announcementRef.update(
        {
            announcements:firebase.firestore.FieldValue.arrayUnion(...finalAnnouncement)
        }
    );
}


async function getAnnouncements(){
    const announcementRef = firebase.firestore().collection('config').doc('announcements');

    const announcementsArr = await announcementRef.get();
   
    let finalArr = announcementsArr.data().announcements;
    return finalArr;
    
}

async function deleteAnnouncement(allAnnouncements,deleteAnnouncements){
    const announcementRef = firebase.firestore().collection('config').doc('announcements');

    for(let i =0;i<allAnnouncements.length;i++){
      
        for(let x = 0; x<deleteAnnouncements.length;x++){

            if(allAnnouncements[i].announcement==deleteAnnouncements[x])
           
            allAnnouncements.splice(i,1);
        }
    }

    await announcementRef.update(
{
    announcements:allAnnouncements
}

    );

    return allAnnouncements

}


export {addAnnouncements,getAnnouncements,deleteAnnouncement}