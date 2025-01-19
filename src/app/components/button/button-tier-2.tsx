export default function ButtonTier2(props:button) {

    return (
        <>
            <button className="bg-dark-gray text-white px-4 py-2 rounded-lg font-bold text-base hover:bg-zinc-500 transition-all">
                <a href={props.href}>{props.title}</a>
            </button>
      </>
       )
}