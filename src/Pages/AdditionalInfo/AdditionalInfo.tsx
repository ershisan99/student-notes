import React from 'react'
import { useQuery } from '@apollo/client'
import { INFO_QUERY } from '../../components/RenderPage'
import { RichTextContent } from '@graphcms/rich-text-types'
import { MyItem } from '../../components/MyItem'
import MyGrid from '../../components/MyGrid'
import { filteredData } from '../../utils/searchFilter'

const AdditionalInfo: React.FC<{ search?: string }> = ({ search }) => {
   const { loading, error, data } = useQuery(INFO_QUERY)

   if (loading) return <p>Loading...</p>
   if (error) return <p>Error :(</p>

   const newData = filteredData(
      data.additionalInfoItems,
      'additionalInfoItem',
      search
   )
   return (
      <MyGrid>
         {newData.map((e: { additionalInfoItem: { raw: RichTextContent } }) => (
            <MyItem content={e.additionalInfoItem.raw} />
         ))}
      </MyGrid>
   )
}
export default AdditionalInfo
