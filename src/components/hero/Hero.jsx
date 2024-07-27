import foto from '../.././assets/me.png'

const Hero = () => {
  return (
    <div className='bg-[#645656] w-full'>
      <div className='mx-12 sm:mx-0 md:mx-0 lg:mx-[150px] pt-12 pb-8 flex flex-col items-center text-center text-white'>
        <img src={foto} alt="Foto Dellyvia Elida" className='size-36 rounded-full' />
        <p className='mt-5 text-2xl font-semibold'>Dellyvia Elida</p>
        <p className='font-light'>Web Developer</p>
        <p className='mt-12 font-light sm:mx-20'>Hi! My name is Dellyvia. I am 22 years old and I recently graduated from Ahmad Dahlan University with bachelor degree in informatics. I am interested in web programming. During college, I had an internship at PT  Liqo Mitra Solusi as a programmer for 3 months. I am eager to explore and learn new things.</p>
        <div className='my-8 space-x-10'>
          <a href=""><i className="bi bi-github"></i></a>
          <a href=""><i className="bi bi-linkedin"></i></a>
        </div>
        <p className='mb-5'><i className="bi bi-geo-alt-fill"></i> Ciputat, Tangerang Selatan</p>
        <a href="" className='bg-[#8D8D8D] px-7 py-2 rounded-full'>Download CV <i className="bi bi-download"></i></a>
      </div>
    </div>
  )
}

export default Hero
