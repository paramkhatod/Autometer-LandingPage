import {   ClockIcon , GlobeIcon } from '@heroicons/react/outline'
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Benefit() {

    let data = [
        {
            id: 1,
            icon: <div className="w-16 h-16 bg-gradient-to-t from-sky-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl font-black text-white">$0</span>
          </div>,
            title: 'Free for All..',
            description: 'Always free, no hidden costs'
        },
        {
            id: 2,
            icon: <div className="w-16 h-16 bg-gradient-to-t from-sky-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            < ClockIcon className="w-8 h-8 text-white" />
          </div>
          ,
            title: '5 minutes',
            description: 'Setup time from start to finish'
        },
        {
            id: 3,
            icon: <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <GlobeIcon className="w-8 h-8 text-white" />
          </div>,
            title: 'No coding',
            description: 'Visual builder, drag and drop'
        }
    ]

    useEffect(()=>{
        AnimScroll(".title",100,".title")
        AnimScroll("#card-0",100,".content")
        AnimScroll("#card-1",150,".content")
        AnimScroll("#card-2",200,".content")
    })

    return (
        
        <div className="xl:w-container mx-auto my-24 md:my-40 text-white">
            <div className="title x-full md:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-relaxed">The benefit you get</h2>
                <p className="mt-2 w-3/4 mx-auto text-slate-400 text-base">Zero cost, education-focused, and beginner-friendly UI. Start automating in 5 minutes without any coding knowledge.</p>
            </div>
            <div className="card-list mt-16 text-center md:text-left flex flex-wrap justify-center gap-10">
                {
                    data.map((content,i) => {
                        return (
                            <div id={"card-"+i} className="group hover:bg-midBlue rounded-2xl hover:rounded-2xl transition duration-200 ease-out p-8 w-[360px]">
                                <span className='flex justify-start md:justify-start'>{content.icon}</span>
                                <h3 className="mt-8 text-2xl font-medium">{content.title}</h3>
                                <p className="content  my-4 text-sm leading-loose text-slate-400 group-hover:text-white">{content.description}</p>
                                <a className='font-medium underline' href="#">Read More</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Benefit
