
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage = () => {
  const [LongUrl, setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();
    if(LongUrl)navigate(`/auth?createNew=${LongUrl}`);
  }
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The Only URL Shortner <br/> you&rsquo;ll ever need! 👇
      </h2>
      <form onSubmit={handleShorten} className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2">
        <input
          type="url"
          value={LongUrl}
          placeholder="Enter your long URL"
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4 bg-white text-black border border-gray-300 rounded-md"
          />
        <button className="h-full bg-red-600 text-white" type="submit">
          {" "}
          Shorten!
        </button>
      </form>
      <img src="/banner.jpeg" alt="banner" className="w-full my-11 md:px-11" />

      <Accordion type="multiple" collapsible className="w-full md:px-11">
        <AccordionItem value="item-1">
          <AccordionTrigger>How does the trimrr URL shortner works?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of that URL.This shortened URL redirects to the original long URL when accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does the trimrr URL shortner works?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of that URL.This shortened URL redirects to the original long URL when accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How does the trimrr URL shortner works?</AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of that URL.This shortened URL redirects to the original long URL when accessed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HomePage;
