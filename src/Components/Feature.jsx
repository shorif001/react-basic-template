import React from 'react'
import FeatureBox from './FeatureBox'
import featureIage from '../images/feature_1.png'
import featureIage2 from '../images/feature_2.png'
import featureIage3 from '../images/feature_3.png'
function Feature() {
  return (
    <div id='features'>
      <div className='a-container'>
        <FeatureBox image={featureIage} title={'development course'} />
        <FeatureBox image={featureIage2} title={'development course'} />
        <FeatureBox image={featureIage3} title={'development course'} />
      </div>
    </div>
  )
}

export default Feature