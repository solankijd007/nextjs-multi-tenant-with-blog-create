'use client'

import Nav from "@/app/components/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as React from 'react'
import { createBlog } from './actions'
import { useOrganization } from '@clerk/nextjs'

export default function OrgLandingPage() {
    const [blogContent, setBlogContent] = React.useState('')
    const [blogTitle, setBlogTitle] = React.useState('')
    const selectedOrg = useOrganization()


    const handleCreateBlog = async () => {
        if (!selectedOrg.organization?.id) return;

        const blogData = {
            title: blogTitle,
            body: blogContent,
            orgId: selectedOrg.organization?.id
        }

        const result = await createBlog(blogData)
    }

    return (
        <main>
            <Nav />
            <div className="p-10">
                <Input placeholder="Blog Title" onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle} />
                <Textarea
                    placeholder="Enter Your Blog Content..."
                    onChange={(e) => setBlogContent(e.target.value)}
                    value={blogContent}
                    className="mt-2"
                />
                <Button className="mt-2" onClick={handleCreateBlog}>Create Blog</Button>
            </div>
        </main>
    )
}