import React from 'react'
import projss1 from '../assets/projss1.png'
import projPF from '../assets/projPF.png'
import Cards from './Cards'
import SnowBord from '../assets/SnowBord.png'
import ComingSoon from '../assets/ComingSoon.png'


const Projects = () => {

    const projectJson = [
      {
        title: 'NITP Cafeteria',
        desc: 'A Full Stack food delivery Project works like zomato or swiggy where people order their food from table and Collage Cafteria delivers order. ',
        image: ComingSoon,
        live: "#",
        github: "#"
      },
        
       
        {
          title: 'Spotify Clone',
          desc: 'A sleek and responsive Spotify clone built with HTML, CSS, and JavaScript, allowing users to browse, play music.',
          image: projss1,
          live: "#",
          github: "#"
        },
        {
          title: 'Portfolio',
          desc: 'A modern and dynamic portfolio built with React and Tailwind CSS, showcasing projects and skills in an elegant and responsive format.',
          image: projPF,
          live: "#",
          github: "https://github.com/tripti1324"
        },
        {
          title: 'Snow Boarder Game',
          desc: 'Experience thrilling downhill action in this Unity C# snowboarding game, where you navigate challenging terrains and perform epic tricks while climbing to new heights!',
          image: SnowBord,
          live: "#",
          github: "#"
        },
      
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
