import React from 'react'

function Card(props) {
    let instalink = `https://www.instagram.com/${props.instagram}`;
    let linkedinlink = `https://www.linkedin.com/in/${props.linkedin}`;
    let githublink = `https://github.com/${props.github}`;
    return (
        <div className="w-1/2 mx-auto mt-4 text-center border block max-w-lg p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h3 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h3>
            {(instalink !== 'https://www.instagram.com/') ? <a target="_blank" rel="noopener noreferrer" href={instalink}><button type="button" className="w-[150px] text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-purple-500 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Instagram</button></a> : <></>}
            {(linkedinlink !== 'https://www.linkedin.com/in/') ? <a target="_blank" rel="noopener noreferrer" href={linkedinlink}><button type="button" className="w-[150px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Linkedin</button></a> : <></>}
            {(githublink !== 'https://github.com/') ? <a target="_blank" rel="noopener noreferrer" href={githublink}><button type="button" className="w-[150px] text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Github</button></a> : <></>}
        </div >

    )
}

export default Card;