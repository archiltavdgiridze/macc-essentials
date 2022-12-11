import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import './Accordion.css'

function AccordionFunct(props) {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">DESCRIPTION</AccordionHeader>
          <AccordionBody accordionId="1">
            Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
            dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,
            condimentum est. Mauris arcu odio, vestibulum quis dapibus sit amet.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">RETURN POLICY</AccordionHeader>
          <AccordionBody accordionId="2">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, nisl eget ultricies tincidunt, nisl eros lacinia risus, a
            ultricies nisl nunc eget lorem. Donec auctor, nisl eget ultricies
            tincidunt, nisl eros lacinia risus, a ultricies nisl nunc eget
            lorem. Donec auctor, nisl eget ultricies tincidunt, nisl eros
            lacinia risus, a ultricies nisl nunc eget lorem. Donec auctor, nisl
            eget ultricies tincidunt, nisl eros lacinia risus, a ultricies nisl
            nunc eget lorem. Donec auctor, nisl eget ultricies tincidunt, nisl
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">CITIZEN POLICY</AccordionHeader>
          <AccordionBody accordionId="3">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt, nisl eget ultricies tincidunt, nisl eros lacinia risus, a
            ultricies nisl nunc eget lorem. Donec auctor, nisl eget ultricies
            tincidunt, nisl eros lacinia risus, a ultricies nisl nunc eget
            lorem. Donec auctor, nisl eget ultricies tincidunt, nisl eros
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionFunct;
