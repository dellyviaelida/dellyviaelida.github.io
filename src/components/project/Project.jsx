import tenangApp from "../.././assets/tenang-app.png"
import absensiApp from "../.././assets/absensi-app.png"
import webProfile from "../.././assets/webprofile-smp.png"

const Project = () => {
  return (
    <>
      <div className='mx-12 sm:mx-24 md:mx-36 lg:mx-[150px] my-12 text-[#645656]'>
        <p className="text-xl font-bold underline underline-offset-8 decoration-4 mb-12">Project</p>
        <div>
            <div className="grid lg:grid-cols-2 gap-4">
                <img src={tenangApp} className="border border-[#957D75] rounded-2xl" alt="" />
                <div className="text-center px-10">
                    <p className="text-xl font-bold mb-5">Tenang App</p>
                    <p className="mb-5">Mental health therapy application that can help reduce mental health problems in final year students while working on their thesis.</p>
                    <p className="font-bold mb-8">Laravel <span className="ml-4">Bootstrap</span></p>
                    <a href="https://github.com/dellyviaelida/apk_tenang" className='bg-[#645656] text-white px-7 py-2 rounded-full'><i className="bi bi-github"></i> Code</a>
                    <a href="" className='bg-[#645656] text-white px-7 py-2 ml-4 rounded-full'>Live Demo <i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-10">
                <img src={webProfile} className="border border-[#957D75] rounded-2xl lg:order-last" alt="" />
                <div className="text-center px-10">
                    <p className="text-xl font-bold mb-5">Web Profile of SMPN 214 Jakarta</p>
                    <p className="mb-5">A web profile that provides information to the community about achievements, facilities, extracurricular activities, news and a list of teachers.</p>
                    <p className="font-bold mb-8">PHP <span className="ml-4">Bootstrap</span></p>
                    <a href="" className='bg-[#645656] text-white px-7 py-2 rounded-full'><i className="bi bi-github"></i> Code</a>
                    <a href="" className='bg-[#645656] text-white px-7 py-2 ml-4 rounded-full'>Live Demo <i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 mt-10">
                <img src={absensiApp} className="border border-[#957D75] rounded-2xl" alt="" />
                <div className="text-center px-10">
                    <p className="text-xl font-bold mb-5">Attendance App for SMPN 214 Jakarta</p>
                    <p className="mb-5">Student attendance application where parents can access information to find out whether their children are attending or not.</p>
                    <p className="font-bold mb-8">PHP <span className="ml-4">Bootstrap</span></p>
                    <a href="" className='bg-[#645656] text-white px-7 py-2 rounded-full'><i className="bi bi-github"></i> Code</a>
                    <a href="" className='bg-[#645656] text-white px-7 py-2 ml-4 rounded-full'>Live Demo <i className="bi bi-box-arrow-up-right"></i></a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Project
