import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img className="writeImg" src="https://avatars.mds.yandex.net/i?id=6c0cbbb5a42257c781b85214b8378897-5552240-images-thumbs&n=13" alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell Your Story..." type="text" className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
