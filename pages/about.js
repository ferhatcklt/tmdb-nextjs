import Link from 'next/link'
import Head from 'next/head'

export default function about(){
    return <div>
        <Head>
            <title>Hakkında</title>
        </Head>
        <div>
            <h1>About Page</h1>
        </div>
        <style jsx>{`
            h1 {
                color:purple;
            }
        `}</style>
    </div>

}