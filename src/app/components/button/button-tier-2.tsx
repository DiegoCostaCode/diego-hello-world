export default function button_tier2(props:button) {

    return (

        <button className="bg-dark-gray w-44 h-16 text-white px-4 py-2 rounded-lg font-bold text-base outline-none hover:outline hover:outline-white hover:outline-2 transition-all delay-200">
            <a href={props.href}>{props.title}</a>
        </button>
   
       )
}