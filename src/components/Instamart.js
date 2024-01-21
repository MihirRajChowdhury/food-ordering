import {useState} from "react"
const Section = ({title,description,isVisible,setIsVisible})=>{
    
    return <div className="border border-pink-200 m-2 p-5">
        <h3 className="font-bold text-l">{title}</h3>
        {isVisible?<button className="cursor-pointer underline" onClick={()=>setIsVisible(false)}>Hide</button>:
        <button className="cursor-pointer underline" onClick={()=>setIsVisible(true)}>Show</button>
        }
        
        {isVisible && <p>{description}</p>}
    </div>
}

const Instamart = ()=>{
    const [sectionConfig,setSectionConfig] = useState("team")
    return <div>
        <h2 className="text-2xl font-bold m-2 p-2">Instamart</h2>
        <Section title={"About Instamart"} 
        description = {"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={sectionConfig === "about"}
        setIsVisible={()=>setSectionConfig("about")}

        />
        <Section title={"Team Instamart"} 
        description = {"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={sectionConfig === "team"}
        setIsVisible={()=>setSectionConfig("team")}

        />
        <Section title={"Carrer Instamart"} 
        description = {"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."}
        isVisible={sectionConfig === "carrer"}
        setIsVisible={()=>setSectionConfig("carrer")}

        />
    </div>
}

export default Instamart;