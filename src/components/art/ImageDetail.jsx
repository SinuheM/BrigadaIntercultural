import Modal from 'react-modal';
import SectionTitle from '../base/SectionTitle';
import { useMediaQuery } from 'usehooks-ts'

const ImageDetail = ({ onClose, open, content }) => {
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      bodyOpenClassName='rounded-2xl'
      style={{ content: { borderRadius: '16px', inset: matches ? '100px 200px' : '50px' } }}
    >
      <div className="py-2 md:py-5 px-5 md:px-10">
        <div className='flex justify-between items-baseline'>
          <SectionTitle el='h2' className="text-2xl mb-2">{content.title}</SectionTitle>
          <button className='text-2.5xl hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full transition-colors' onClick={onClose}>x</button>
        </div>
        <div className='leading-8'>
          {content.detail}
          <p className='mt-4 leading-7'>{content.description}</p>
        </div>
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 mt-4 overflow-y-auto justify-items-center'>
          { 
            !content?.hideImages && content?.images?.map((image, index) => (
              <img src={image} key={'det_' + index} className='rounded-2xl border border-gray-200' alt="" />
            ))
          }
          { 
            content?.videos?.map((video, index) => (
              <iframe 
                style={{ maxWidth: '100%' }}
                key={'vid_'+index}
                width="560"
                height="315"
                src={video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            ))
          }
        </div>
      </div>
    </Modal>
  )
}

export default ImageDetail