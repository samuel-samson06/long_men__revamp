// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { deleteObject, getDownloadURL, getStorage, listAll, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, updateDoc, setDoc, getDoc, collection, getDocs, deleteDoc } from "firebase/firestore";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDSaugIAL26xeU7u9f5LVpy7K2Mjm6meu8",
  authDomain: "longmen-media.firebaseapp.com",
  projectId: "longmen-media",
  storageBucket: "longmen-media.appspot.com",
  messagingSenderId: "804743050611",
  appId: "1:804743050611:web:7f68d0b2d16907fa05c106",
  measurementId: "G-531XS73E0N"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app)

// UPLOADING OF DOCUMENTS TO LONGMEN FIREBASE BACKEND

// Uploading Images for Upcoming Event
export const upcoming_event = async (upcoming_event_form,image)=>{
    const updateRef = doc(db,"upcoming_event","Pn0klSmrNSV9YHifzM3J")
    try{
        const storageRef = ref(storage, `upcoming/${image.name}`)  
        const uploadTask = uploadBytesResumable(storageRef,image)
        uploadTask.on("state_changed",(snapshot)=>{
            console.log(snapshot);           
        },(error)=>{
            console.log(error);
        },async ()=>{
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const imageUrl = downloadURL;
            const upcoming_event = await updateDoc(updateRef,{...upcoming_event_form,imageUrl:imageUrl});
            return upcoming_event
        })
    }catch(error){
        console.log(error);
        return false;        
    }
    
}
// Uploading Any other images
export const uploadImages = async (image)=>{
    const uploadRef = ref(storage, `other_uploads/${image.name}`)
    uploadBytes(uploadRef,image).then(()=>{
        return true
    }).catch((error)=>{
        console.log(error);
        return false
    })
}

// Creating a partner document in the collecction
export const createPartner = async function(partner,image){
    const id = v4()
    const createdPartner = doc(db,"partners",id)
    try{
        const uploadRef = ref(storage, `partners/${image.name}`)
        const uploadTask = uploadBytesResumable(uploadRef,image)
        uploadTask.on("state_changed",(snapshot)=>{
            console.log(snapshot);           
        },(error)=>{
            console.log(error);
        },async ()=>{
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const imageUrl = downloadURL;
            const setDocument = await setDoc(createdPartner,{...partner,imageUrl,id});
            return setDocument
        })
       
    }catch(error){
        console.log(error);
    }
}

// Getting Data from FIREBASE
export const gettingUpcomingEvent = async ()=>{
    const docRef = doc(db,"upcoming_event","Pn0klSmrNSV9YHifzM3J") 
    try{
        const docSnap = await getDoc(docRef)
        if(docSnap.exists()){
            return docSnap.data()
        }else{
            return null
        }
    }catch(error){
        console.log(error)
    }
}

export const gettingPartners = async ()=>{
    const partnerCollection = collection(db, "partners");
    try{
        const querySnapshot = await getDocs(partnerCollection);
        const partnersData = querySnapshot.docs.map((doc)=>doc.data());
        return partnersData;
    }catch(error){
        console.log(error)
    }
}

export const listAllUploadedImages = async () => {
    try {
      const listRef = ref(storage, "other_uploads/");
      const { items } = await listAll(listRef);
      const urls = await Promise.all(
        items.map((itemRef) => getDownloadURL(itemRef).then((url) => ({ id: v4(), img: url }))
      ));
      return urls;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

//   deleting from firebase

  export const deletePartner = async (id) => {
    try {
      const partnerRef = doc(db, "partners", id);
      await deleteDoc(partnerRef);
    } catch (error) {
      console.error(`Error deleting partner with id ${id}:`, error);
    }
  };


export const deleteImage = async (file)=>{
    const imageRefernce = ref(storage,`other_uploads/${file}`);
    try{
        const deleteObj = await deleteObject(imageRefernce);
        console.log(`File ${deleteObj} succeful`)        
    }catch(error){
        console.log(error)
    }
}
