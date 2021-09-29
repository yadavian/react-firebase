import { onSnapshot, collection, setDoc, addDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from './firebase'

const Dot = ({ color }) => {
  const style = {
    height: 25,
    width: 25,
    margin: "Opx 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block",
  };
  return <span style={style}></span>;
};



export default function App() {

  const [colors, setColors] = useState([{ name: "loading...", id: "initial" }])

  useEffect(
    () =>
      //onSnapshot accepts 2 params 1st represend form which collection data to get and callback functions which gets data
      onSnapshot(collection(db, "colors"), (snapshot) => {
        // setColors(snapshot.docs.map(doc => doc.data()))
        setColors(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
      }
      ), [])

  const handleEdit = async () => {
    //setDoc is func which set doc accepts 2 params, 1st is docRef where the data is to be saved, payload is data.
    const docRef = doc(db, "colors", "colors111")
    const payload = { name: "white", value: "#000" }
    await setDoc(docRef, payload)
  }

  const handleNew = async () => {
    const name = prompt("color >>>>  ")
    const value = prompt("value >>>>  ")
    //setDoc is func which set doc accepts 2 params, 1st is docRef where the data is to be saved, payload is data.
    const coolectionRef = collection(db, "colors")
    const payload = { name: name, value: value }
    const docRef = await addDoc(coolectionRef, payload)
    console.log("Newly Created ID >> ",docRef.id)
  }

  return (
    <div className="root">
      <button className="button" onClick={handleNew}>New</button>
      <ul>
        {colors.map((d, i) => {
          return <li key={colors.id}>
            <a href="#">edit</a> <Dot color={d.value} /> {d.name}
          </li>
        })
        }
      </ul>
    </div>
  );
}