import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div className="accordion-content">
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Do I need any prior boxing experience to join the club?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, you don't need any prior boxing experience to join our club. We
            welcome individuals of all skill levels, from beginners to advanced
            boxers. Our experienced trainers will provide guidance and support
            at every step of your boxing journey.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            What equipment do I need to bring for training sessions?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            For training sessions, we recommend bringing a pair of boxing
            gloves, hand wraps, and comfortable workout attire. We have some
            equipment available for use, but having your own gloves and wraps is
            encouraged for hygiene reasons and personal comfort.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Are there age restrictions to join the boxing club?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we have age restrictions for safety reasons. Our club is open
            to individuals aged 16 and above. For individuals under 18, we
            require parental consent and supervision during training sessions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What training programs do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a variety of training programs to suit different goals and
            preferences. Our programs include boxing fundamentals, fitness
            boxing, sparring sessions, and specialized training for competitive
            boxers. Our trainers will help you choose the program that best fits
            your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            Can I try a training session before committing to a membership?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="typo">
            Yes, we offer trial sessions for individuals who are interested in
            joining the club. You can try a training session to get a feel for
            our facilities, meet our trainers, and experience our training
            environment. You can book trial sessions online on our offers page.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
