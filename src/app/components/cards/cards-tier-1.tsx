export default function card(props:card) {

    return (

        <div className="bg-soft-black min-w-72 max-w-96 min-h-72 text-lg border-2 p-5 rounded-lg hover:scale-110 transition-all delay-200">
            <h1 className="w-fit text-2xl font-bold p-2 border-1 rounded-lg mb-3">
                {props.title}
            </h1>
            <p className=" hover:font-medium transition-all delay-200">
                {props.description}
            </p>
        </div>

       )
}



