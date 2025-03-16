'use client'  
// всегда, когда используем хуки
import Image from 'next/image'
import styles from './Products.module.css'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'

export function Products (){
    const {} = useRouter () // хук from 'next/navigation' !!
    // push - редирект на нужную страницу  const {push} = useRouter () 
    //  push('/products/1/')
    // replace - так же редирект, но и очищение истории, невозможно вернуться на предідущую страницу (удобно, например при авторизации)

    // const pathName = usePathname() // хук показівает текущее местоположение, адрес вашей страниці. Актуально, когда в меню необходимо показать активній єлемент

    //  const params = useSearchParams()  // хук работает только для query-запросов


     const slugParams = useParams<{slug:string}>()//  если нужно получить из папки текущий [slug]
     slugParams.slug // текущий параметр строки
    return(<div className={styles.products}>
        <Image src='/27.svg' alt='logo' width={150} height={44}/>

    </div>)
}