import { useEffect, useState } from "react";
import { db } from "../firebase";
import {getDocs,collection} from "firebase/firestore"
import "./view.css"
function ViewPrescription() {
    const [Prescrieption,setPrescreption] = useState([]);
    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
     };
     const collectionRef=collection(db,"Consultation")
    useEffect(() => {
        const getList=async()=>{
            try{
                const data=await getDocs(collectionRef);
                const filteredData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                }))
                setPrescreption(filteredData)

            }
            catch(err){
                console.error(err);
            }
        }
        getList();
    })
    return ( <>
    {Prescrieption.map((m) => ((<div className="container">{m.consultation}</div> )))}
    </> );
}

export default ViewPrescription;