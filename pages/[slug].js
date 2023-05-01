import { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter()
  const { slug } = router.query

  return <p>You type: {slug}</p>
}

export default slug