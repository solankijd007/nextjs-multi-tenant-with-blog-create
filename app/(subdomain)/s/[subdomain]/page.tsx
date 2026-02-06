import { db } from "@/db"
import { clerkClient } from "@clerk/nextjs/server"
import { eq } from "drizzle-orm"
import { blogTable } from "@/db/schema"

interface Params {
    subdomain: string
}

export default async function SubdomainPage({ params }: { params: Promise<Params> }) {
    const { subdomain } = await params
    const client = await clerkClient()
    const org = await client.organizations.getOrganization({
        slug: subdomain
    })

    if (!org) {
        return <div>Organization not found</div>
    }
    const orgId = org.id
    const blogs = await db.select().from(blogTable).where(eq(
        blogTable.orgId,
        orgId
    ))
    console.log("blogs ===>", blogs)

    return <div className="p-10">
        {blogs.map((blog) => (
            <div key={blog.id} className="border border-gray-200 p-4 mb-4">
                <h1 className="text-2xl font-bold">{blog.title}</h1>
                <p className="text-gray-600">{blog.body}</p>
            </div>
        ))}
    </div>
}