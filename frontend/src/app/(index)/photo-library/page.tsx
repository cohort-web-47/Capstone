import {Nav} from "@/components/Nav";


export default function PhotoLibraryPage() {

    const pix = [
        {picId: "1", picUrl: "https://picsum.photos/400", picName: "test"},
        {picId: "2", picUrl: "https://picsum.photos/100", picName: "test"},
        {picId: "3", picUrl: "https://picsum.photos/300", picName: "test"},
        {picId: "4", picUrl: "https://picsum.photos/500", picName: "test"},
        {picId: "5", picUrl: "https://picsum.photos/600", picName: "test"},
        {picId: "6", picUrl: "https://picsum.photos/400", picName: "test"},
        {picId: "7", picUrl: "https://picsum.photos/200", picName: "test"},
        {picId: "8", picUrl: "https://picsum.photos/100", picName: "test"},
        {picId: "9", picUrl: "https://picsum.photos/400", picName: "test"},
        {picId: "10", picUrl: "https://picsum.photos/300", picName: "test"},
        {picId: "11", picUrl: "https://picsum.photos/500", picName: "test"},
        {picId: "12", picUrl: "https://picsum.photos/700", picName: "test"},
        {picId: "13", picUrl: "https://picsum.photos/400", picName: "test"},
        {picId: "14", picUrl: "https://picsum.photos/100", picName: "test"},
        {picId: "15", picUrl: "https://picsum.photos/200", picName: "test"},
        {picId: "16", picUrl: "https://picsum.photos/100", picName: "test"},
        {picId: "17", picUrl: "https://picsum.photos/400", picName: "test"},
        {picId: "18", picUrl: "https://picsum.photos/300", picName: "test"},
        {picId: "19", picUrl: "https://picsum.photos/500", picName: "test"},
        {picId: "20", picUrl: "https://picsum.photos/700", picName: "test"},
        {picId: "21", picUrl: "https://picsum.photos/400", picName: "test"},
        {picId: "22", picUrl: "https://picsum.photos/200", picName: "test"}
    ]
    return (
        <>
            <Nav />
            <div className="grid grid-cols-4 mt-4 gap-x-0">

                {
                    pix.map(picture => <div className="w-20 h-20 m-4 border-2 border-black" key={picture.picId}>{<img src={picture.picUrl} alt={picture.picName}/>}</div>)
                }

            </div>
        </>
    )
}