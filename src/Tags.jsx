function Tags(props) {

    return (
        <div className="w-1/2 mx-auto flex flex-col justify-center">
            {props.info?.map((tag, i) => {
                return (
                    <div className="flex justify-between border my-2 p-2  rounded-lg">
                        <p key={i} className="text-2xl">{tag}</p>
                        <button className="border w-8 rounded-full">X</button>
                    </div>
                    )
            })}
        </div>
    )
}
export default Tags;