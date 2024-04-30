import { useParams } from 'react-router-dom'

export default function UserPage() {
  const { id } = useParams()
  return (
    <div>
      UserPage
      <h1>{id}</h1>
    </div>
  )
}
