import React, { useState } from 'react'
import db from '../firebase.config';
import { addDoc, collection } from 'firebase/firestore';
function Form() {
    const [noname, setNoname] = useState(false);
    const [name, setName] = useState('');
    const [insta, setInsta] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();
        if (name === "") setNoname(true); else setNoname(false);
        // if (insta === "") setNoinsta(true); else setNoinsta(false);
        // if (linkedin === "") setNolinkedin(true); else setNolinkedin(false);
        // if (github === "") setNogithub(true); else setNogithub(false);
        console.log(name, insta, linkedin);
        if (name !== '') {
            try {
                const docRef = await addDoc(collection(db, "student"), {
                    name: name,
                    instagram: insta,
                    linkedin: linkedin,
                    github: github
                });
                console.log("Document written with ID: ", docRef.id);
                window.location.reload();
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }
    }
    return (
        <form className="max-w-sm mx-auto m-4">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gebaseError: Function addDocray-900 dark:text-white">Name</label>
                <input type="text" id="name" onChange={(e) => { setName(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                {noname ? <span className='text-red-500'>Name is required</span> : <span></span>}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram username</label>
                <input type="text" id="instagram" onChange={(e) => { setInsta(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Just the username without @ symbol' required />
                {/* {noinsta ? <span className='text-red-500'>Insta id is required</span> : <span></span>} */}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github username</label>
                <input type="text" id="github" onChange={(e) => { setGithub(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Again, just the username' required />
                {/* {nogithub ? <span className='text-red-500'>Github id is required</span> : <span></span>} */}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Linkedin username</label>
                <input type="text" id="linkedin" onChange={(e) => { setLinkedin(e.target.value) }} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Just the username, not whole URL' required />
                {/* {nolinkedin ? <span className='text-red-500'>Linkedin username is required</span> : <span></span>} */}
            </div>

            <button id="button" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form >
    )
}

export default Form