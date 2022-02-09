import React from 'react'
import { useQuery } from '@apollo/client'
import { JSTS_QUERY } from '../../components/RenderPage'
import { RichTextContent } from '@graphcms/rich-text-types'
import { MyItem } from '../../components/MyItem'
import MyGrid from '../../components/MyGrid'
import { filteredData } from '../../utils/searchFilter'

const JSTS: React.FC<{ search?: string }> = ({ search }) => {
   const { loading, error, data } = useQuery(JSTS_QUERY)

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error :(</p>

   const newData = filteredData(
      data.vanillaPageItems,
      'vanillaPageItem',
      search
   )
   return (
      <MyGrid>
         {newData.map((e: { vanillaPageItem: { raw: RichTextContent } }) => (
            <MyItem content={e.vanillaPageItem.raw} />
         ))}
      </MyGrid>
   )
}
export default JSTS
