// pages/index.js
import Image from "next/image";

 function chefcard() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto p-8">
        {/* <h1 className="text-4xl font-bold text-center mb-12">Meet the Chefs</h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Chef 1 */}
          <div className="text-center">
            <Image
              src="/chef1.png" // Replace with the correct image path
              alt="Chef 1"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Tahmina Rumi</p>
          </div>

          {/* Chef 2 */}
          <div className="text-center">
            <Image
              src="/chef2.png" // Replace with the correct image path
              alt="Chef 2"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">M.Mohammad</p>
          </div>

          {/* Chef 3 */}
          <div className="text-center">
            <Image
              src="/chef3.png" // Replace with the correct image path
              alt="Chef 3"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Munna Kathy</p>
          </div>

          {/* Chef 4 */}
          <div className="text-center">
            <Image
              src="/chef4.png" // Replace with the correct image path
              alt="Chef 4"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Bisnu devgon</p>
          </div>

          {/* Chef 5 */}
          <div className="text-center">
            <Image
              src="/chef5.png" // Replace with the correct image path
              alt="Chef 5"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Motin Molladsf</p>
          </div>

          {/* Chef 6 */}
          <div className="text-center">
            <Image
              src="/chef6.png" // Replace with the correct image path
              alt="Chef 6"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">William Rumi</p>
          </div>

          {/* Chef 7 */}
          <div className="text-center">
            <Image
              src="/chef7.png" // Replace with the correct image path
              alt="Chef 7"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Kets william roy</p>
          </div>

          {/* Chef 8 */}
          <div className="text-center">
            <Image
              src="/chef8.png" // Replace with the correct image path
              alt="Chef 8"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Ataur Rahman</p>
          </div>

          {/* Chef 9 */}
          <div className="text-center">
            <Image
              src="/chef9.png" // Replace with the correct image path
              alt="Chef 9"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Mahmud kholil</p>
          </div>

          {/* Chef 10 */}
          <div className="text-center">
            <Image
              src="/chef10.png" // Replace with the correct image path
              alt="Chef 10"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Monalisa holly</p>
          </div>

          {/* Chef 11 */}
          <div className="text-center">
            <Image
              src="/chef11.png" // Replace with the correct image path
              alt="Chef 11"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Jorina Begum</p>
          </div>

          {/* Chef 12 */}
          <div className="text-center">
            <Image
              src="/chef12.png" // Replace with the correct image path
              alt="Chef 12"
              width={300}
              height={300}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="font-semibold">Kets william </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default chefcard