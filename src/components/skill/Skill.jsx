import { FaHtml5, FaCss3Alt, FaSquareJs, FaBootstrap, FaReact, FaGitAlt, FaLaravel } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoFigma } from "react-icons/bi";
import { SiLooker, SiPhp, SiMysql } from "react-icons/si";

const Skill = () => {
  return (
    <>
      <div className='mx-12 sm:mx-24 md:mx-36 lg:mx-[150px] my-12 text-[#645656]'>
        <p className="text-xl font-bold underline underline-offset-8 decoration-4 mb-12">Skill & Tool</p>
        <div className="lg:flex gap-10 justify-center text-center text-white mb-12">
          <div className="bg-[#645656] rounded-2xl p-5 mb-5 lg:mb-0">
            <p className="text-xl font-semibold my-5">Web Development</p>
            <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, voluptates animi ex quasi natus a molestiae optio accusamus architecto mollitia, id, qui consequuntur laborum. Iste hic eum accusantium amet distinctio.</p>
          </div>
          <div className="bg-[#645656] rounded-2xl p-5">
            <p className="text-xl font-semibold my-5">Design App</p>
            <p className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sapiente alias placeat cum, tenetur, eaque ipsam animi, ab cupiditate velit doloribus. Voluptate neque fuga sequi iusto cumque doloremque aspernatur minus.</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-14 gap-y-8 justify-center text-center">
          <div>
            <FaHtml5 className="size-14" title="HTML5"/>HTML5
          </div>
          <div>
            <FaCss3Alt className="size-14" title="CSS3" />CSS3
          </div>
          <div>
            <FaSquareJs className="size-14 ml-2" title="JavaScript"/>JavaScript
          </div>
          <div>
            <SiPhp className="size-14" title="PHP" />PHP
          </div>
          <div>
            <SiMysql className="size-14" title="MySQL" />MySQL
          </div>
          <div>
            <BiLogoTailwindCss className="size-14 ml-4" title="TailwindCSS" />TailwindCSS
          </div>
          <div>
            <FaBootstrap className="size-14 ml-1" title="Bootstrap" />Bootstrap
          </div>
          <div>
            <FaReact className="size-14" title="ReactJS"/>ReactJS
          </div>
          <div>
            <FaLaravel className="size-14" title="Laravel" />Laravel
          </div>
          <div>
            <FaGitAlt className="size-14" title="Git" />Git
          </div>
          <div>
            <BiLogoFigma className="size-14" title="Figma"/>Figma
          </div>
          <div>
            <SiLooker className="size-14 ml-5" title="Looker Studio"/>Looker Studio
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill
