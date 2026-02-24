import { ChartData } from '@/type'
import React, { useEffect, useState } from 'react'
import { getProductCategoryDistribution } from '../actions'
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Rectangle, BarChart, LabelList, Cell } from 'recharts'
import EmptyState from './EmptyState'

const CategoryChart = ({ email }: { email: string }) => {
  const [data, setData] = useState<ChartData[]>([])

  const COLORS = {
    default: "#F1D2BF"
  }

  const fetchStats = async () => {
    try {
      if (email) {
        const data = await getProductCategoryDistribution(email)
        if (data) {
          setData(data)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (email)
      fetchStats()
  }, [email])


  const renderChart = (widthOverride?: string) => (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        barCategoryGap={widthOverride ? 0 : "10"}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={
            {
              fontSize: 15,
              fill: "#793205",
              fontWeight: "bold"
            }
          }
        />
        <YAxis hide />
        <Bar
          dataKey="value"
          radius={[8, 8, 0, 0]}
        // barSize={200}
        >

          <LabelList
            fill="#793205"
            dataKey="value"
            position="insideRight"
            style={{ fontSize: "20px", fontWeight: 'bold' }}
          />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS.default} cursor="default" />
          ))}

        </Bar>



      </BarChart>
    </ResponsiveContainer>
  )

  if (data.length == 0) {
    return (
      <div className='w-full border-2 border-base-200 mt-4 p-4 rounded-3xl'>
        <h2 className='text-xl font-bold mb-4'>
          5 catégories avec le plus de produits
        </h2>
        <EmptyState
          message='Aucune catégorie pour le moment"'
          IconComponent='Group'
        />
      </div>
    )
  }

  return (
    <div className='w-full border-2 border-base-200 mt-4 p-4 rounded-3xl'>
      <h2 className='text-xl font-bold mb-4'>
        5 catégories avec le plus de produits
      </h2>
      {renderChart()}
    </div>
  )
}

export default CategoryChart


