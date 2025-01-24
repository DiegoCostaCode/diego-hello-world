export default function ButtonTier1(props:button) {

    return (

        <button className="bg-white w-44 h-16 text-black px-4 py-2 rounded-lg font-bold text-base hover:scale-110 transition-all delay-200">
            <a href={props.href}>{props.title}</a>
        </button>
     
       )
}