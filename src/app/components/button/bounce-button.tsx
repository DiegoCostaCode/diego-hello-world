export default function BounceButton(props:button) {

    return (

        <button className="w-full animate-pulse mt-5">
            <a className="w-auto h-9 flex justify-center bg-dark-gray items-center rounded-lg" href={props.href} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a>

        </button>
     
       )
}