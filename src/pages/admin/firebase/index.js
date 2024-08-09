// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { doc, getFirestore, updateDoc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";
// import { download } from "express/lib/response";


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
        // await uploadBytes(storageRef,image)
        const storageRef = ref(storage, `upcoming/${image.name}`)  
        const uploadTask = uploadBytesResumable(storageRef,image)
        uploadTask.on("state_changed",(snapshot)=>{
            console.log(snapshot);           
        },(error)=>{
            console.log(error);
        },async ()=>{
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            const imageUrl = downloadURL;
            console.log(imageUrl)
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
        // console.log("Image Uploaded");
        return true
    }).catch((error)=>{
        console.log(error);
        return false
    })
}

// Creating a partner document in the collecction
const createdPartner = doc(db,"partners",v4())
export const createPartner = async function(partner,image){
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
            console.log(imageUrl)
            const setDocument = await setDoc(createdPartner,{...partner,imageUrl});
            return setDocument
        })
       
    }catch(error){
        console.log(error);
    }
}

