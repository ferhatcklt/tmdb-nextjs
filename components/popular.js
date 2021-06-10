 import Link from 'next/link'

export default function Popular({popularmovies}){
    return <div className="popular">
        <h2>Populer Filmler</h2>
        <div className="popular-inner">
            {popularmovies.results.map(movie => (
            <Link href={`/film/${movie.id}`} key={movie.id}>
                <a>
                    <p className="vote">{movie.vote_average}</p>
                    <p className="adult" data-adult={movie.adult}>+18</p>
                    <h3>{movie.title}</h3>
                    <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} />
                </a>
            </Link>
            ))}
        </div>
        <style jsx>{`
            .popular{
                width:80%;
                margin:0 auto;
                padding:20px 0;

                .popular-inner{
                    display: flex;
                    flex-wrap:wrap;
                    gap:10px;
                }
                h2{
                    font-size:40px;
                    margin-bottom:20px;
                }
                
                a{
                    width:calc(25% - 10px);
                    position:relative;

                    h3 {
                        font-size:20px;
                        position:absolute;
                        bottom:0;
                        left:0;
                        width:100%;
                        color:#fff;
                        background:linear-gradient(to top,#000, transparent);
                        padding:50px 20px 20px;
                        transition:300ms;
                    }
                    :hover h3{
                        padding-bottom:25px;
                    }
                    img{
                        width:100%;
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
            @media screen and(max-width: 1024px){
                .popular a{
                    width:calc(33.333% - 10px);
                }
                
            }
            @media screen and(max-width: 768px){
                .popular a{
                    width:calc(50% - 10px);
                }
            }
            @media screen and(max-width: 580px){
                .popular {
                    width:90%;
                }
            }
        `}</style>
    </div>
}

