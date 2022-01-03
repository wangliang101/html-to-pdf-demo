import React from 'react';
import './index.scss';
import PageContainer from '../../components/pageContainer'

const ImagePage = () => {
  return(
    <div className='app_wrap'>
      <div className='app_header'>
        报告预览
      </div>
      <div className='app_body'><PageContainer /></div>
      <div className='app_footer'>
        <button>下载</button>
        <button>打印</button>
      </div>
    </div>
  )
}

export default ImagePage;