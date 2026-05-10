import Link from "next/link";
import { JSX } from "react";

export default function BackToHome(): JSX.Element {
    return (
        <Link href="/" className="bg-primary py-2 rounded-lg text-surface px-4">
            &larr; Back to Home
        </Link>
    )
}
