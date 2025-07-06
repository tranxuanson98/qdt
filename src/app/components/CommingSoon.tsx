// import LottieAnimation from "./comming/LottieAnimation";
import LinkIndicator from "./comming/LinkIndicatior";

const CommingSoon = () => {
    return (
        <div className="relative min-h-[100vh]">
            <div className='relative z-10 flex justify-center items-center py-[20px]'>
                <img src="/common/logo-trans.png" className='h-[36px] w-auto' alt="logo" />
            </div>
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="/video/hero_video.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="relative flex items-center justify-center max-md:flex-col max-md:!h-full">

                {/* <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-10"></div> */}

                <div className="relative flex gap-3 bg-transparent items-center justify-center w-full max-md:flex-col max-md:!h-full z-20" style={{ minHeight: 'calc(100vh - 76px)' }}>
                    {/* <LottieAnimation
                    url="/rocket2.json"
                    height={550}
                    width={400}
                /> */}
                    <div className="flex flex-col font-goldman items-center justify-center self-stretch my-auto min-w-[240px] max-md:mb-30">
                        <div className="flex flex-col items-center">
                            <div className="text-[56px] max-md:text-[40px] font-medium tracking-tighter text-white">
                                SẮP RA MẮT
                            </div>
                            <div className="mt-5 text-[46px] max-md:text-[32px] tracking-tight text-white text-center">
                                Hãy chờ đón những điều tuyệt vời sắp tới.
                            </div>
                        </div>

                        <div className="w-full flex justify-center">
                            <LinkIndicator href="https://manhinh.qdt.com.vn/"
                                className="flex gap-2 justify-center items-center self-start px-6 py-3.5 mt-10 text-base font-semibold tracking-tight text-white rounded-xl border-2 border-white border-solid min-h-[46px] max-md:px-5"
                            >
                                <span className="self-stretch my-auto text-[26px] max-md:text-[18px]">Truy cập QDT Monitor</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                    <path d="M17.8172 10.983L12.1922 16.608C12.0749 16.7253 11.9159 16.7912 11.75 16.7912C11.5841 16.7912 11.4251 16.7253 11.3078 16.608C11.1905 16.4907 11.1247 16.3317 11.1247 16.1658C11.1247 16 11.1905 15.8409 11.3078 15.7236L15.8664 11.1658H3.625C3.45924 11.1658 3.30027 11.1 3.18306 10.9828C3.06585 10.8655 3 10.7066 3 10.5408C3 10.3751 3.06585 10.2161 3.18306 10.0989C3.30027 9.98166 3.45924 9.91581 3.625 9.91581H15.8664L11.3078 5.358C11.1905 5.24073 11.1247 5.08167 11.1247 4.91581C11.1247 4.74996 11.1905 4.5909 11.3078 4.47363C11.4251 4.35635 11.5841 4.29047 11.75 4.29047C11.9159 4.29047 12.0749 4.35635 12.1922 4.47363L17.8172 10.0986C17.8753 10.1567 17.9214 10.2256 17.9529 10.3015C17.9843 10.3773 18.0005 10.4587 18.0005 10.5408C18.0005 10.6229 17.9843 10.7043 17.9529 10.7802C17.9214 10.856 17.8753 10.925 17.8172 10.983Z" fill="#fff" />
                                </svg>
                            </LinkIndicator>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CommingSoon;