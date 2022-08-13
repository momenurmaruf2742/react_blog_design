import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlepost">
        <div className="singlePostWrapper">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet,
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Maruf</b> </span>
                <span className="singlePostDate">1 hour ago ⌛ </span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi hic ducimus earum officiis ab optio ad quo molestias doloribus, deserunt, error nostrum tempore in temporibus fugiat quisquam, voluptates totam corrupti?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores suscipit ea, dolore ducimus fuga, quidem laudantium vel accusantium maxime consectetur illum atque aliquid, soluta temporibus saepe id aut. Maiores!Lorem
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto eligendi aut dolore qui amet dolores corrupti, obcaecati fugiat repudiandae laudantium nemo animi reiciendis delectus enim provident cupiditate consequuntur ipsa? Ducimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi veniam aliquam hic error quibusdam? Repellat sed quibusdam neque deserunt earum aperiam harum illo quisquam. Maiores eius quod accusamus et perferendis!
            </p>
        </div>
    </div>
  )
}
