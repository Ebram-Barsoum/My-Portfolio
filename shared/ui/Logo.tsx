import Link from 'next/link'
import type { JSX } from 'react'

export default function Logo(): JSX.Element {
    return (
        <Link href="/" className='uppercase text-xl text-primary font-mono font-bold'>
            ebram.dev
        </Link>
    )
}
