import {useRouter} from 'next/router'

export default function Category(){
    const router = useRouter()
    const {url} = router.query
    return <div>
        Film: {url}
    </div>
}