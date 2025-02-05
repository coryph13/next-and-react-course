import RedirectButton from '@/components/ui/RedirectButton'
// import { redirect } from 'next/navigation';

async function ClientProjectsPage({
  params
}: {
  params: Promise<{
    id: string,
  }>
}) {
  const { id } = await params;

  // redirect(`/clients/${id}/project-b`);

  return (
    <div>
      <h1>The Projects of a Given Client.</h1>
      <RedirectButton url={`/clients/${id}/project-a`} text={`Project A`} />
    </div>
  )
}

export default ClientProjectsPage;