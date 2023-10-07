import TextIcon from './TextIcon'
import Text from './Text'

const HowToIcons = () => {
  return (
    <>
      <div className='flex flex-row md:flex-col items-center'>
        <div className='w-20 text-center'>
          <TextIcon className="mb-3 ml-4" type="circle">1</TextIcon>  
        </div>
        <Text className="mb-4">Formación sensibilizante <br /> (teórico-práctica)</Text>  
      </div>
      <div className='flex flex-row md:flex-col mt-4 md:mt-0 items-center'>
        <div className="w-20 text-center">
          <TextIcon className="mb-3" type="diamond">2</TextIcon>  
        </div>
        <Text className="md:mb-4">Reflexión ciudadana <br /> (introspectiva-artística)</Text>  
      </div>
      <div className='flex flex-row md:flex-col mt-8 md:mt-0 overflow-hidden items-center'>
        <div className="w-20 text-center">
          <TextIcon className="mb-3" type="triangle">3</TextIcon>  
        </div>
        <Text className="mb-2 md:mb-4">Acción comunitaria <br /> (participativa)</Text>  
      </div>
    </>
  )
}

export default HowToIcons