function Hero() {
  return (
    <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen">
            <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
                Create Your Forms,
                <strong className="font-extrabold text-primary sm:block"> In Seconds, Not Hours. </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-bold text-white shadow hover:bg-primary/80 focus:outline-none focus:ring active:bg-primary/65 sm:w-auto"
                href="#"
                >
                + Create AI Form
                </a>

                <a
                className="block w-full rounded px-12 py-3 text-sm font-bold text-primary shadow hover:text-primary/65 focus:outline-none focus:ring active:text-primary/65 sm:w-auto"
                href="#"
                >
                Learn More
                </a>
            </div>
            </div>
        </div>
    </section>
  )
}
export default Hero