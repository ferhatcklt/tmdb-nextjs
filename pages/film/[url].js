import Head from 'next/head'
import Link from 'next/link'

export default function FilmDetail({movie,recommendations}){
    return (
    <div className="container">
        <Head>
            <title>{movie.title}</title>
        </Head>
        
        <div className="movie">
            <div className="cover" style={{backgroundImage:`url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}></div>
            <h3>{movie.title}</h3>
            <div className="summary">
                {movie.overview}
            </div>
        </div>
        <div className="recommended">
            <h3 className="recommended-title">Önerilenler</h3>
            <div className="recommended-content">
                
                {recommendations.results.map(recommended => (
                    <Link href={`/film/${recommended.id}`} key={recommended.id}>
                        <a>
                            <p className="vote">{recommended.vote_average}</p>
                            <p className="adult" data-adult={recommended.adult}>+18</p>
                            <div className="cover" style={{backgroundImage:`url(https://www.themoviedb.org/t/p/original${recommended.backdrop_path})`}}></div>
                            <h3 >{recommended.title}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
        <style jsx>{`
            .container{
                width:1100px;
                margin:0 auto;
                position:relative;
                
            }
            .recommended{
                border-radius:10px;
                margin-top:20px;
                padding:20px;
                
                .recommended-title{
                    text-align:center;
                    font-size:24px;
                    margin-bottom:20px;
                }
                .recommended-content{
                    display:flex;
                    gap:10px;
                    flex-wrap:wrap;
                    
                    
                    a{
                        height:200px;
                        width:calc(25% - 10px);
                        position:relative;
                        margin-bottom:15px;
                        .cover{
                            width:100%;
                            height:100%;
                            background-size:cover;
                        }
                        h3{
                            position:absolute;
                            left:0;
                            bottom:0;
                            text-align:center;
                            width:100%;
                            color:#fff;
                            font-size:18px;
                            padding:10px;
                            align-items:baseline;
                        }
                        .vote{
                        position:absolute;
                        left:6px;
                        top:6px;
                        background-color:orangered;
                        padding:4px 10px;
                        border-radius:2px;
                        color:#fff;
                        font-size:14px;
                    }
                    .adult[data-adult="false"]{
                        display:none;
                    }
                    .adult[data-adult="true"]{
                        position:absolute;
                        top:6px;
                        right:6px;
                        background-color:#fff;
                        padding:0;
                        border-radius:50%;
                        color:red;
                        font-size:14px;
                        width:40px;
                        height:40px;
                        align-items:center;
                        justify-content:center;
                        display:flex;
                        text-align:center;
                        font-weight:900;
                        border:3px solid red;
                    }
                    }
                }

            }
            .movie{
                width:1100px;
                margin:0px auto;
                position:relative;
                padding:20px;
                height:400px;

                h3 {
                    font-size:30px;
                    font-weight:bold;
                    margin-bottom:20px;
                }
                .summary{
                    font-size:18px;
                    color:#666;
                    line-height:1.7;
                }
                .cover{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:400px;
                    background-size:cover;
                    opacity:.3;
                    z-index:-1;

                    &::before{
                        content:'';
                        background:linear-gradient(to bottom, transparent, #ddd);
                        position: absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;

                    }
                }
            }
        `}</style>
    </div>
    
    )
}

export async function getServerSideProps({params}) {
    const request = await fetch(`https://api.themoviedb.org/3/movie/${params.url}?api_key=240cbfd8b5b886abf954e81521036a49&language=tr-TR&page=1`)
    const movie = await request.json()
    const request2 = await fetch(`https://api.themoviedb.org/3/movie/${params.url}/recommendations?api_key=240cbfd8b5b886abf954e81521036a49&language=tr-TR&page=1`)
    const recommendations = await request2.json()
    return {
        props: {
            movie,recommendations
        }
    }
}
