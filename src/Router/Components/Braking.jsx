import Marquee from "react-fast-marquee";

const Braking = () => {
    const style ={
        background:'#f3f3f3'
    }
    return (
        <div className={`flex gap-7 py-5 px-5`} style={style}>
            <button className="bg-pink-600 text-white py-1 px-3">Latest</button>
            <Marquee className="text-xl" gradientColor="#f3f3f3" gradient={true}>
                Putin's key miscalculation in the war in Ukraine Putin's key miscalculation in the war in Ukraine
            </Marquee>
        </div>
    );
};

export default Braking;