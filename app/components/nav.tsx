'use client'

import * as React from 'react'
import { UserButton, OrganizationSwitcher } from '@clerk/nextjs'

const Nav: React.FC = () => {
    return (
        <nav className='flex justify-between items-center p-4'>
            <div>
                <h1 className='text-2xl font-semibold'>Blog Application</h1>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <OrganizationSwitcher afterSelectOrganizationUrl="/org/:slug" />
                <UserButton />
            </div>
        </nav>
    )
}

export default Nav
