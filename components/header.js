import Link from 'next/link'

export default function Header(){
    return <>
    <header>
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            Anasayfa
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>
                            Hakkında
                        </a>
                    </Link>
                </li>
                
            </ul>
        </nav>
    </header>
    <style jsx>{`
        header{
            background-color:#fff;
            border-bottom:1px solid #ccc;
            
            nav{   
                width:80%;
                margin:0 auto;
                ul{
                    display:flex;

                    li{
                        position:relative;
                        transition:300ms;
                        
                        a {
                            display:flex;
                            text-decoration:none;
                            height:60px;
                            align-items:center;
                            padding:0 20px;
                            color:#333;
                            transition:300ms;

                            :hover{
                                color:#fff;
                            }
                        }

                        :hover {
                            background-color:#000;
                        }
                    }
                }
            }
        }
        @media screen and(max-width: 580px){
                header nav {
                    width:90%;
                }
            }
    `}</style>
    </>
    
}