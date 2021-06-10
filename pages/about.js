import Link from 'next/link'
import Head from 'next/head'

export default function about(){
    return <div>
        <Head>
            <title>Hakkında</title>
        </Head>
        <div className="container">
            <h1>Hakkında</h1>
        </div>
        <style jsx>{`
            h1 {
                color:purple;
            }
            .container{
                width:80%;
                margin:0 auto;
                padding-top:25px;
            }
        `}</style>
    </div>

}