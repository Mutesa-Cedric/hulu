import Image from "next/image"

function Plans() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center text-white pb-8 border-b border-gray-600 ">
          <h1 className="text-white text-3xl font-bold tracking-wide pb-4">Select Your Plan</h1>
          <p className="text-center text-lg ">No hidden fees, equipment rentals, or installation appointments.</p>
          <p className="font-bold">Switch plans or Cancel anytime.</p>
        </div>
        <div className="flex flex-col md:flex-row border-b border-gray-600">
          <div className="flex justify-center">
            <div className="text-white flex flex-col items-center space-y-2">
              <h1>BASE PLANS</h1>
              <Image src={"/images/logo-main.png"} height={10} width={30} />
            </div>
            <div></div>
            <div></div>
          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Plans