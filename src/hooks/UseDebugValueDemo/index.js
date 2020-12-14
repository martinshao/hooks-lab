import React, {useDebugValue, useState} from 'react';

const useTest = () => {
  const [str, setStr] = useState('');
  useDebugValue(str, (value: string) => {
    console.log(value);
    return '这是改造后的' + value;
  });
  return {
    str,
    setStr,
  };
};

export default function UseDebugValueDemo() {
  const {str, setStr} = useTest();
  return (
    <>
      <h2>{str}</h2>
      <button
        onClick={() => {
          setStr('重新渲染');
        }}
      >
        这是？？？
      </button>
    </>
  );
}
