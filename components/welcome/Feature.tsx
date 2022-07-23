export interface FeatureProps {
    img: string,
    name: string,
    description: string
}
function Feature({ img, name, description }: FeatureProps) {
    return (
        <div className="text-white bg-center bg-cover bg-no-repeat h-[280px]  md:h-96 lg:h-[460px] flex items-start flex-col
            object-cover pt-2 pl-4 space-y-1 lg:w-[300px] cursor-pointer"
            style={{ backgroundImage: `linear-gradient(to top,rgba(255,255,255,.0) 0,rgba(0,0,0,.0) 0%,rgba(0,0,0,.0) 70%,rgba(0,0,0,.8) 100%),url(${img})` }}>
            <p className="text-sm">{description}</p>
            <h1 className="font-bold tracking-wide text-lg">{name}</h1>
        </div>
    )
}

export default Feature