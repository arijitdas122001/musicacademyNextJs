'use client'
import { CardBody, CardContainer, CardItem } from '@/components/ui/ed-card';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const page = () => {
    const [allNews,setallNews]=useState([]);
    useEffect(()=>{
        const fetchData=async()=>{
        const response=await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=b493c78ef29541b387d070021247bb82');
        setallNews(response.data.articles);
        }
        fetchData();
    },[])
  return (
    <div>
      <div className='p-10 flex flex-wrap'>
      {allNews.map((ele:any,i)=>(
      <CardContainer className="inter-var m-4" key={i}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {ele.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {ele.description}
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  <Link href={ele.url}>View</Link>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
))}
</div>
    </div>
  )
}

export default page
