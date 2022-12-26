import { useRouter } from 'next/router'

export default function article() {
    const router = useRouter()
    const { id } = router.query;
  return (
    <div>this is an articles id is {id}</div>
  )
}
