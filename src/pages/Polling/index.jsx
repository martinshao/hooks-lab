import React, { useState, useEffect, useRef } from 'react'
import Mock from 'mockjs';
import { Button, Spin } from 'antd';

import RegionSelect from '../../components/RegionSelect'

// console.log(`%c${}`, "color:gold")

/**
 * console.log(`%c`, '')
 * color:gold
 * color:deepskyblue
 * color:orangered
 * color: yellowgreen
 * color: #1E8E3E;
 */

const regions = [
  {
    label: 'cn-shanghai',
    value: 'cn-shanghai',
    region: 'cn-shanghai',
  },
  {
    label: 'cn-beijing',
    value: 'cn-beijing',
    region: 'cn-beijing',
  }
]

function getUsername() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.info('%cimitate request start...', 'color:gold')
      resolve(Mock.mock('@name'));
    }, 3000);
  });
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // 保存新回调
  useEffect(() => {
    savedCallback.current = callback;
  });

  // 建立 interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function index() {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [polling, isPolling] = useState(false)
  const [region, setRegion] = useState('')
  useInterval(() => {
    // Your custom logic here
    const fetchData = async () => {
      setLoading(true)
      const data = await getUsername()
      setLoading(false)
      setName(data)
    }
    fetchData()
  }, polling ? 1000 : null);

  const onChange = (region) => setRegion(region)

  return (
    <>
      <Spin spinning={loading}>
        <p>Username: {name}</p>
      </Spin>
      <Button.Group>
        <Button onClick={() => isPolling(true)}>start</Button>
        <Button onClick={() => isPolling(false)}>stop</Button>
      </Button.Group>
      <RegionSelect
        value={region}
        dataSource={regions}
        onChange={onChange}
      />
    </>
  )
}

export default index
