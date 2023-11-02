import Tag from "./Tag";

function Tags(props) {


    return (
        <div className="w-2/3 mx-auto flex flex-col justify-center">
            {props.info?.map((tag, i) => {
                return (
                    <div key={i} className="flex justify-between bg-slate-50 my-2 p-2  rounded-lg">
                        <Tag info={tag} indice={i} deleteTag={props.deleteTag}/>
                    </div>
                    )
            })}
        </div>
    )
}
export default Tags;