async function SelectedClientProjectPage({
  params
}: {
  params: Promise<{
    id: string;
    projectid: string;
  }>
}) {
  const { id, projectid } = await params;

  return (
    <div>
      <h1>Project Page for Specific Project for a Selected Client.</h1>
      <h2>ID: {id}</h2>
      <h2>Project ID: {projectid} </h2>
    </div>
  )
}

export default SelectedClientProjectPage;