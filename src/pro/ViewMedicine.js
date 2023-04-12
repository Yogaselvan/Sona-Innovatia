import { useEffect, useState } from "react";
import { db } from "../firebase";
import {getDocs,collection} from "firebase/firestore"
function ViewMedicine() {
    const [medicine,setMedicine] = useState([]);
    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
     };
     const collectionRef=collection(db,"Medicine")
    useEffect(() => {
        // const user = getUserFromLocalStorage();
        // db.collection("Medicine").get().then((querySnapshot) => {querySnapshot.forEach((doc) => {
        //     console.log(doc.data());
        //     if(doc.data().email === "abcd@gmail.com"){
        //         setMedicine(...medicine,doc.data())
        //     }
        //   });})
        //   console.log(medicine);
        const getList=async()=>{
            try{
                const data=await getDocs(collectionRef);
                const filteredData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                }))
                setMedicine(filteredData)

            }
            catch(err){
                console.error(err);
            }
        }
        getList();
    })
    return ( <>
    <table className="table table-dark table-striped">
        <tr>
            <th>Hospital Name</th>
            <th>Days</th>
            <th>Doctor Name</th>
            <th>Email</th>
            <th>Medicine</th>
        </tr>
        {
            medicine.map(m=>((
               
                <tr>
                    <td>{m.Hospitalname}</td>
                    <td>{m.days}</td>
                    <td>{m.doctorName}</td>
                    <td>{m.email}</td>
                    <td>{m.medicine}</td>
                </tr>
                 
            )
            ))
        }
        
    </table>
    </> );
}

export default ViewMedicine;