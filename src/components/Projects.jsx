/* eslint-disable react/prop-types */
function Projects({ data }) {
  return (
    <section className="container paddingY border-b-primary border-b-[1px] max-w-[1000px] gridme mx-auto mt-10">
      {data.map((e) => {
        return (
          <div
            key={e.id}
            className="overflow-hidden project relative cursor-pointer flex items-center justify-center"
          >
            <img
              className="transition duration-300 object-contain"
              src={e.thumbnail}
              alt={e.name}
            />
            <div className="absolute top-0 left-0 flex flex-col opacity-0 hover:opacity-100 transition-all duration-300 items-center justify-center bg-[rgba(0,0,0,0.8)] w-full h-full">
              <h2 className="text-[46px] font-montserrat font-bold uppercase text-white">
                {e.name}
              </h2>
              <p className="text-[24] font-brandonLight text-white">
                {e.description}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
