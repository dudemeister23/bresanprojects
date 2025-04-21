"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-[#02346A]/20">
        <AccordionTrigger className="text-left text-[#02346A]">What types of projects do you manage?</AccordionTrigger>
        <AccordionContent>
          We manage home remodels, flips, and investor renovations ranging from $25K to $500K+ in scope.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-[#02346A]/20">
        <AccordionTrigger className="text-left text-[#02346A]">Do you handle permits and contractors?</AccordionTrigger>
        <AccordionContent>
          Yes, we oversee permitting, hiring subcontractors, and scheduling—so you don't have to.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-[#02346A]/20">
        <AccordionTrigger className="text-left text-[#02346A]">Where do you operate?</AccordionTrigger>
        <AccordionContent>
          We serve Palm Beach County from Hobe Sound to Lake Worth, including Jupiter and Palm Beach Gardens.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-[#02346A]/20">
        <AccordionTrigger className="text-left text-[#02346A]">Do you offer design services?</AccordionTrigger>
        <AccordionContent>
          We partner with professional designers when needed, ensuring your space reflects your vision.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
