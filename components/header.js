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
            
            ul{
                display:flex;

                li{
                     
                    a {
                        display:flex;
                        text-decoration:none;
                        height:60px;
                        align-items:center;
                        padding:0 20px;
                        color:#333;
                    }
                }
            }
        }
    `}</style>
    </>
    
}