import { Line } from './Line.jsx';

const data = [
  {
    src: '../src/icons/web.png',
    title: 'Created to Make The Web Better',
    info:
      'Aenean cursus imperdiet nisl id fermentum. Aliquam pharetra dui laoreet vulputate dignissim. Sed id metus id quam auctor molestie eget ut augue.',
  },
  {
    src: '../src/icons/tool.png',
    title: 'Incredibly Powerful Tool',
    info:
      'Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Aliquam erat volutpat.',
  },
  {
    src: '../src/icons/experiment.png',
    title: 'Experimental Stuff',
    info:
      'Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Aliquam erat volutpat.',
  },
  {
    src: '../src/icons/time.png',
    title: 'Created to Make The Web Better',
    info:
      'Maecenas eu dictum felis, a dignissim nibh. Mauris rhoncus felis odio, ut volutpat massa placerat ac. Curabitur dapibus iaculis mi gravida luctus. Aliquam erat volutpat.',
  },
];

const text = '<Here is what you get>';

export function Features() {
  return ( 
    <section className="flex flex-row mt-10  mx-auto gap-10 max-[1000px]:flex-col ">

      <p className="text-[#8D81AC] w-full text-center text-4xl font-bold max-[500px]:text-[130%] min-[1000px]:hidden">{text}</p>
     
      <section className="flex flex-col gap-5  items-start justify-center w-full">
        {data.map((element, i) => (
          <Line key={i} data={element} />
        ))}
      </section>

      <section className="flex flex-col items-start w-full mt-4 ">
        <p className="text-[#8D81AC] text-4xl font-bold my-2 max-[500px]:text-[130%] max-[1000px]:hidden">{text}</p>
        <img src="../src/images/code.png" className="w-full" alt="" />
      </section>
    </section>
  );
}
