import type { MetaFunction } from '@vercel/remix'
import Note from '~/components/Note'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className="h-screen flex">
      <div className="m-auto">
        <Note/>
      </div>
    </div>
  )
}
