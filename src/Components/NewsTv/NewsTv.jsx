import SingleTv from "./SingleTv";

const NewsTv = () => {

    const NewsTv = [
        {
            "_id": "1",
            "image": "https://i.ibb.co/3ynjqk9/bbsTv-2.png"
        },
        {
            "_id": "2",
            "image": "https://i.ibb.co/NC68R3V/NewsTv.png"
        },
        {
            "_id": "3",
            "image": "https://i.ibb.co/z6p4rbL/busuness-Tv.png"
        },
        {
            "_id": "4",
            "image": "https://i.ibb.co/KrTswVV/globalTv.png"
        },
        {
            "_id": "5",
            "image": "https://i.ibb.co/5xkw4xj/OneTv.png"
        },
        {
            "_id": "6",
            "image": "https://i.ibb.co/x80ccXf/smartTv.png"
        }
    ]


    return (
        <div className="my-8">
            <div className="w-[80%] mx-auto grid grid-cols-6 gap-3">
                {
                    NewsTv.map(singleTv => <SingleTv
                        singleTv={singleTv}
                        key={singleTv._id}
                    ></SingleTv>)
                }
            </div>
        </div>
    );
};

export default NewsTv;