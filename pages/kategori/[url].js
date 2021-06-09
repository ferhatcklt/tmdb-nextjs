import Head from 'next/head'

export default function Category({category}){
    console.log(category)
    return (
    <div className="category">
        <Head>
            <title></title>
        </Head>
        <h3></h3>
        <style jsx>{`
            .category{
                width:1100px;
                margin:0px auto;
                position:relative;
                padding:20px;

                h3 {
                    font-size:30px;
                    font-weight:bold;
                    margin-bottom:20px;
                }
                
            }
        `}</style>
    </div>
    
    )
}

export async function getServerSideProps({params}) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/11/recommendations?api_key=240cbfd8b5b886abf954e81521036a49&language=tr-TR&page=1`)
    const category = await request.json()
    return {
        props: {
            category
        }
    }
}