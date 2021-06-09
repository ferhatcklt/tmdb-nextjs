import Link from 'next/link'
import Head from 'next/head'

export default function about(){
    return <div>
        <Head>
            <title>Blog</title>
        </Head>
        <div>
            <h1>Blog Page</h1>
        </div>
        <style jsx>{`
            h1 {
                color:purple;
            }
        `}</style>
    </div>

}