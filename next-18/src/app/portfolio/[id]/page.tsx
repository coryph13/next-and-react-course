import Project from "@/pages/portfolio/Project";

async function PortfolioProjectPage({
    params
}: {
    params: Promise<{
        id: string
    }>
}) {

    await new Promise(resolve => setTimeout(resolve, 3000));

    return <>
        <Project params={await params} />
    </>
}

export default PortfolioProjectPage;