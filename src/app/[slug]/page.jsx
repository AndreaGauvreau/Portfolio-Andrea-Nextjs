'use client'
import {ContentPage} from '@/components/projects/componentState'
import {useGetDataProjet} from '@/db/data-projets.jsx'
export default function Page({params}) {
  const {data, loading, error} = useGetDataProjet(params?.slug)
  return (
    <>
      <ContentPage datas={data} loading={loading} error={error} />
    </>
  )
}
