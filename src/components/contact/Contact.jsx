const Contact = () => {
    return(
        <>
        <div className='mx-12 sm:mx-24 md:mx-36 lg:mx-[150px] my-12 text-[#645656]'>
            <p className="text-xl font-bold underline underline-offset-8 decoration-4 mb-12">Contact</p>
            <p className="text-xl font-semibold mb-10">Don't be shy! Hit me up!</p>
            <div className="flex gap-x-24">
                <div>
                    <p className="font-bold">Location</p>
                    <p className="">Ciputat, Tangerang Selatan</p>
                </div>
                <div>
                    <p className="font-bold">Mail</p>
                    <p className="">dellyelida@gmail.com</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact