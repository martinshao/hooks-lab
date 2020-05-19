import React, { useContext } from 'react';
import Table from '@alicloud/console-components-table'
import { Icon, Grid } from '@alicloud/console-components'

import { ShopContext } from '../ShopProvider'


const columns = [
  {
    dataIndex: 'name',
    title: 'Name',
    key: 'name',
  },
  {
    dataIndex: 'price',
    title: 'Price',
    key: 'price',
  },
  {
    aglign: 'center',
    dataIndex: 'amount',
    title: 'Amount',
    key: 'amount',
    cell: value => (
      <>
        <Icon style={{ color: 'yellowgreen' }} type="add" />
        {value}
        <Icon style={{ color: 'yellowgreen' }} type="minus" />
      </>
    )
  }
]

export default function Goods(props) {
  const { item } = useContext(ShopContext)
  return (
    <Grid.Row>
      <Grid.Col span="24">
        <div style={{ margin: '0 24px' }}>
          <Table
            exact
            dataSource={item}
            columns={columns}
            primaryKey="id"
          />
        </div>
      </Grid.Col>
    </Grid.Row>
  );
}
