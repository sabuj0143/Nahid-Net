
const SingleTv = ({ singleTv }) => {
    console.log(singleTv);
    const {image} = singleTv;
    return (
        <>
            <img className="w-[150px] h-[150px]" src={image} alt="" />
        </>
    );
};

export default SingleTv;