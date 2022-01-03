import React from 'react';
import Page from '../page';

const PageContainer = () => {
  return(
    <div className='page_container'>
      {new Array(3).fill(null).map((item, index) => {
        return (
          <>
            <div style={{height: '10px'}}></div>
            <Page index={index}></Page>
            <div style={{height: '10px'}}></div>
          </>
        )
      })}
    </div>
  )
}

export default PageContainer;