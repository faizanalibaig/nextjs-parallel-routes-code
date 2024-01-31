import Card from '@/app/components/Card'
import Link from 'next/link'

function Notification() {
  return (
    <Card>
      <div>
      Notification
      </div>
      <Link href="/dashboard/archieve">Archieve</Link>
    </Card>
  )
}

export default Notification