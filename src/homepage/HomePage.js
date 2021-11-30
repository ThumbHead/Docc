import React from 'react'
import DocSection from './DocSection';
import SearchDoc from './SearchDoc';
import { SignupPageFooter } from '../forms/SignupPageFooter';
import { SignupPageHeader } from '../forms/SignupPageHeader';

export const HomePage = () => {
    return (
        <>

<div className="main-wrapper">
          <SignupPageHeader />
          <div>
              <SearchDoc />
              <DocSection />
          </div>
          <SignupPageFooter />
        </div>
            
        </>
    )
}

export default HomePage;