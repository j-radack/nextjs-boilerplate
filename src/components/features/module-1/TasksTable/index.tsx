import React from 'react'
import { doGetTask } from '@adapters/module-1'
import { useTranslations } from '@hooks/common/locales.hook'
import { useQuery } from '@tanstack/react-query'
import { Skeleton, Table } from 'antd'
import { QUERY_KEYS } from '@utils/constants/routes.config'

import { columns } from './_column.config'

function TaskTable() {
  const { t } = useTranslations()
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.GET_TASKS],
    queryFn: doGetTask,
  })

  return (
    <Skeleton loading={isLoading} active paragraph={{ rows: 20 }}>
      <Table columns={columns(t)} dataSource={data?.data} rowKey={'id'} />
    </Skeleton>
  )
}

export default TaskTable
