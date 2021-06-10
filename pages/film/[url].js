import Head from 'next/head'
import Link from 'next/link'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, breakpoints } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';




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
                <Swiper
                spaceBetween={10}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                    },
                    580: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                  }}
                >
                   
                {recommendations.results.map(recommended => (
                   <SwiperSlide key={recommended.id}> <Link href={`/film/${recommended.id}`} >
                        <a>
                            <p className="vote">{recommended.vote_average}</p>
                            <p className="adult" data-adult={recommended.adult}>+18</p>
                            <div className="cover" style={{backgroundImage:`url(https://www.themoviedb.org/t/p/w220_and_h330_face${recommended.backdrop_path})`}}></div>
                            <h3 >{recommended.title}</h3>
                        </a>
                    </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
        <style jsx>{`
            .swiper-slide{
                height:200px;
            }
            .container{
                width:80%;
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
                    height:200px;
                    
                    a{
                        height:200px;
                        width:100%;
                        position:relative;
                        display:inline-block;
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
                width:100%;
                margin:0px auto;
                position:relative;
                padding:20px;
                height:auto;

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
            @media screen and(max-width: 1024px){
                .movie{
                    width:100%;
                    padding:20px 5%;
                }
                .container{
                    width:100%;
                }
            }
            @media screen and(max-width: 768px){
                .movie{
                    width:100%;
                    padding:20px 5%;
                }
                .container{
                    width:100%;
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
