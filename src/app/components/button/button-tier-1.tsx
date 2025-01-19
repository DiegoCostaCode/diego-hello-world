export default function ButtonTier1(props:button) {

    return (

        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-base hover:scale-105 transition-all ">
            <a href={props.href}>{props.title}</a>
        </button>
     
       )
}