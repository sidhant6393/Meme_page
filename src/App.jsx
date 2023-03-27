// export default function App() {
//   return <div>Random GIF</div>;
// }
import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';


const App = () => {
  return (
    <div className='w-full h-screen flex flex-col background relative items-center overflow-x-hidden'>
      <h1 className='absolute w-11/12 text-center mt-[35px] px-10 py-2 rounded-lg font-bold text-4xl bg-white rounded-sm'>Random GIFs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[25px]'>
        <Random></Random>
        <Tag></Tag>
      </div>
      
    </div>
  )
}

export default App
