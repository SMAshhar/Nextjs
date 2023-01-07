'use client';

// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useRouter } from "next/navigation";

export default function () {
    const router = useRouter();

    return (
        <button type="button" onClick={() => router.push('/page1')}>
            Go to the page 1
        </button>
        // <button type="button" onClick={() => router.push('/page2')}>
        //         Go to the page 2
        // </button>
    

    );
}
