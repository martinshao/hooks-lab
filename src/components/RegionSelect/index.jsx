import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

function RegionSelect(props) {
  const { value, onChange, dataSource } = props
  const clsname = region => value === region ? 'region selected' : 'region'
  return (
    <div className="region-wrapper">
      <span className="title">选择地域: </span>
      {
        Array.isArray(dataSource) ?
          dataSource.map((item) => (
            <div
              key={`log-${item.region}`}
              className={clsname(item.region)}
              onClick={() => onChange(item.region)}
            >
              {item.region}
            </div>
          ))
          :
          <span>暂无地域</span>
      }
    </div>
  )
}

RegionSelect.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  dataSource: PropTypes.arrayOf(PropTypes.any),
}

export default RegionSelect
