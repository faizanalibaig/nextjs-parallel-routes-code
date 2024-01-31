import Card from '@/app/components/Card'
import Link from 'next/link'
import React from 'react'

function DefaultArchieve() {
  return (
    <Card>
        <div>
        Archieve
        </div>
        <Link href='/dashboard'>Default</Link>
    </Card>
  )
}

export default DefaultArchieve