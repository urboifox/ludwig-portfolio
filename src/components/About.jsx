/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import ScrollTop from "./ScrollTop";

function About({ data }) {
  return (
    <section
      id="about"
      className="paddingY flex items-end justify-between max-w-[1000px] mx-auto"
    >
      <div className="max-w-[600px]">
        {data.paragraphs.map((e) => {
          return (
            <p
              className="font-brandonLight mb-5 text-white font-light text-[16px] md:text-[20px]"
              key={nanoid()}
            >
              {e.content}
            </p>
          );
        })}
      </div>
      <ScrollTop />
    </section>
  );
}

export default About;
