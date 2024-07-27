const Experience = () => {
  return (
    <>
        <div className='mx-12 sm:mx-24 md:mx-36 lg:mx-[150px] my-12 text-[#645656]'>
            <p className="text-xl font-bold underline underline-offset-8 decoration-4 mb-5">Experience</p>
            <ul className='list-disc m-10'>
                <li>
                    <div className="grid grid-cols-3 gap-x-10 mx-4">
                        <p>Universitas Ahmad Dahlan</p>
                        <p className="font-bold col-span-2">Data Visualization Practicum Assistant</p>
                        <p className="font-bold">Mar-Aug 2023</p>
                        <p className="col-span-2">Taught how to create a good data visualization starting from data preparation to visualization process using Looker Studio.</p>
                    </div>
                </li>
                <li>
                    <div className="grid grid-cols-3 gap-4 mx-4 mt-5">
                        <p>Universitas Ahmad Dahlan</p>
                        <p className="font-bold col-span-2">Geographic Information Systems Practicum Assistant</p>
                        <p className="font-bold">Mar-Aug 2023</p>
                        <p className="col-span-2">Taught how to create geographic maps using QGIS tools.</p>
                    </div>
                </li>
                <li>
                    <div className="grid grid-cols-3 gap-4 mx-4 mt-6">
                        <p>PT. Liqo Mitra Solusi</p>
                        <p className="font-bold col-span-2">Internship as Web Programmer</p>
                        <p className="font-bold">Sep - Dec 2022</p>
                        <p className="col-span-2">Creating an attendance application and web profile for SMPN 214 Jakarta using Native PHP, HTML, CSS, Bootstrap</p>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default Experience
