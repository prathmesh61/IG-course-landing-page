"use client";

type Props = {};

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Heading from "./Heading";
const Accordian = (props: Props) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="px-6 mt-28">
      <Heading className="bg-pinkBrand text-white py-2 px-5 rounded-lg text-center">
        Frequently Asked Questions🧐
      </Heading>
      <Accordion open={open === 1} className="mt-10">
        <AccordionHeader onClick={() => handleOpen(1)}>
          How long do I have access to the course materials?
        </AccordionHeader>
        <AccordionBody>
          Upon enrollment, you'll enjoy lifetime access to all course content,
          including any updates or additions in the future.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Will this course help me monetize my Instagram account?
        </AccordionHeader>
        <AccordionBody>
          Yes, we help you turn your Instagram presence into a lucrative
          business.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          Do I need any special equipment or software to participate?
        </AccordionHeader>
        <AccordionBody>
          No, we provide guidance on both free and paid tools, ensuring that you
          can apply our strategies regardless of your budget or technical
          expertise.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          If I make a payment now, when will I get joining link?
        </AccordionHeader>
        <AccordionBody>
          Once you complete your payment, you have to create accout on teachable
          and you can will get access for lifetime.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          Which language is the workshop in?
        </AccordionHeader>
        <AccordionBody>Hindi & English Mix Primary Hindi.</AccordionBody>
      </Accordion>
    </div>
  );
};

export default Accordian;
