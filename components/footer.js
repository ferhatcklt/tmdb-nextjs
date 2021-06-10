
export default function Footer(){
    return <>
    <footer>
        <p>
            FC tarafından heyecanla kodlanmıştır. 
        </p>
    </footer>
    <style jsx>{`
        footer{
            position:fixed;
            bottom:0;
            width:100%;
            height:50px;
            background-color:#ccc;
        }
        footer p{
            text-align:center;
            line-height:50px;
        }
    `}</style>
    </>
    
}