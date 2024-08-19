import React, { useState } from 'react'
import Card from './Card'
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase.config';


function List() {
    let i = 0;
    const [students_list, setStudents] = useState([]);
    let students = [];
    const [done, setDone] = useState(false);
    async function getData() {
        if (done) return;
        const querySnapshot = await getDocs(collection(db, "student"));
        querySnapshot.forEach((doc) => {
            students.push({
                name: doc.data().name,
                linkedin: doc.data().linkedin,
                instagram: doc.data().instagram,
                github: doc.data().github,
            })
            setStudents(students);
        });
        console.log(students);
        setDone(true);
    }
    getData();
    return (<div>

        {students_list.map(item => (
            <Card key={i++} name={item.name} instagram={item.instagram} linkedin={item.linkedin} github={item.github} />
        )
        )}
    </div>
    )
}

export default List