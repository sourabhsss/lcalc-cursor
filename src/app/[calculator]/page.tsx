'use client'

import { useParams } from 'next/navigation'
import { routeMap } from '@/lib/routes'
import NotFound from '@/pages/NotFound'
import PageLayout from '@/components/PageLayout'

export default function CalculatorPage() {
  const params = useParams()
  const calculatorPath = params?.calculator ? `/${params.calculator}` : '/'
  const Component = routeMap[calculatorPath] || NotFound

  return (
    <PageLayout>
      <Component />
    </PageLayout>
  )
} 