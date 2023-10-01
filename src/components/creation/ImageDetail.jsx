import Modal from 'react-modal';
import SectionTitle from '../base/SectionTitle';
import { useMediaQuery } from 'usehooks-ts'
import Accordion from '../base/Accordion';

const ImageDetail = ({ onClose, open, content }) => {
  const matches = useMediaQuery('(min-width: 768px)')

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      bodyOpenClassName='rounded-2xl'
      style={{ content: { borderRadius: '16px', inset: matches ? '100px 150px' : '50px' } }}
    >
      <div className="py-2 md:py-5 px-5 md:px-10">
        <div className='flex justify-between items-baseline'>
          <SectionTitle el='h2' className="text-2xl mb-2">Brigada Intercultural en el {content.year}</SectionTitle>
          <button className='text-2.5xl hover:bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full transition-colors' onClick={onClose}>x</button>
        </div>
        <div className='my-4 leading-7'>
          <h3 className='inline font-medium'>Coordinador:</h3>
          <p className='inline ml-2'>
            {content.coordinator}
          </p>
          <img src={content.coordinador_image} alt="" loading="lazy" className='w-44 rounded-2xl mt-4' />
        </div>
        <div className='mb-4 leading-7'>
          <Accordion 
            id={'form_sens_'+content.year}
            header={
              <h3 className='inline font-medium'>Formación sensibilizante</h3>
            }
            body={
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-6 mt-4 overflow-y-auto justify-items-center'>
                { 
                  content?.sensitizing_training?.map((image, index) => (
                    <img src={image} loading="lazy" key={'f_sen_' + index} className='rounded-2xl border border-gray-200' alt="" />
                  ))
                }
              </div>
            }
           />
        </div>
        <div className='mb-4 leading-7'>
          <Accordion 
            id={'ref_cread_'+content.year}
            header={
              <h3 className='inline font-medium'>Reflexión creadora</h3>
            }
            body={
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-6 mt-4 overflow-y-auto justify-items-center'>
                { 
                  content?.creative_reflection?.map((image, index) => (
                    <img src={image} loading="lazy" key={'f_cre_' + index} className='rounded-2xl border border-gray-200' alt="" />
                  ))
                }
              </div>
            }
          />
        </div>
        <div className='mb-4 leading-7'>
          <Accordion 
            id={'ref_cread_'+content.year}
            header={
              <h3 className='inline font-medium'>Acción comunitaria</h3>
            }
            body={
              <div className='grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-6 mt-4 overflow-y-auto justify-items-center'>
                { 
                  content?.community_action?.map((image, index) => (
                    <img src={image} loading="lazy" key={'r_cre_' + index} className='rounded-2xl border border-gray-200' alt="" />
                  ))
                }
              </div>
            }
          />
        </div>
      </div>
    </Modal>
  )
}

export default ImageDetail