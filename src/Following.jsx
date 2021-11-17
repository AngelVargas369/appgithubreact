import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './layout/Header'
import FollowersCard from './components/FollowersCard/FollowersCard'

const Following = () => {
    const{name}= useParams()
        const[followingData, setFollowinData] = useState ([])
        
        useEffect(()=>{
            const requestApi = async () =>{
                const urlDir =`https://api.github.com/users/${name}/following`
                const response =await fetch(urlDir)
                const result =await response.json()
                setFollowinData(result)

            }
            requestApi()
        },[name])




    return (
        <div>
            <Header/>
            {
                followingData?.map(data=> 
                <FollowersCard 
                key={data.id} 
                userName={data?.login} 
                image={data?.avatar_url} 
                /> 
                ) 


                
            }
            
        </div>
    )
}

export default Following
