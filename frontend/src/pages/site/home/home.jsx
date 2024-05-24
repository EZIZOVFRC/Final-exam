
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
import Cards from '../../../components/Cards/Cards'
import axios from 'axios'
import Sec1 from '../../../components/Sec1/Sec1'
import Sec2 from '../../../components/Sec2/Sec2'
import Sec3 from '../../../components/Sec3/Sec3'
    
    const Home = () => {
        axios
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Sec1/>
                <Sec2/>
                <Cards data={data}/>
                <Sec3/>
            
        </>
        )
    }
    
    export default Home
        