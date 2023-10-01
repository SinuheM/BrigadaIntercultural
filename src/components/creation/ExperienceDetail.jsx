import SectionTitle from '../base/SectionTitle'
import ImageDetail from './ImageDetail'
import { useState } from 'react';

const ExperienceDetail = ({ experience }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button 
        className='rounded-2xl p-4 border border-gray-200 hover:bg-slate-200 transition-colors text-left'
        onClick={() => setModal(true)}
      >
        <SectionTitle className="text-2xl">{experience.year}</SectionTitle>
        <img src={experience.image} alt="" className="rounded-2xl" />
      </button>
      <ImageDetail
        open={modal}
        onClose={() => setModal(false)}
        content={ experience }
      />
    </>
  )
}

export default ExperienceDetail