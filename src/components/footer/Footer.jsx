import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return(
        <>
        <div className="bg-[#645656] text-white p-3">
            <div className="flex flex-col md:flex-row gap-5 md:gap-x-96 items-center md:justify-center">
                <div>Copyright c 2024. All rights are reserved</div>
                <div className="flex gap-x-2">
                    <FaLinkedin className="size-5" />
                    <FaGithub className="size-5" />
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Footer