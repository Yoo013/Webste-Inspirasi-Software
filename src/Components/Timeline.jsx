import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Star } from "@mui/icons-material";
import { timelineData } from "../Components/Data";


const Timeline = () => {

  return (
    <div className="mt-44 max-w-[1200px] mx-auto p-2 " id="timeline">
      <h1 className="font-semibold font-open-sans leading-9 text-[32px] opacity-[63%]">Prosedur Order Pembuatan Aplikasi</h1>
      <VerticalTimeline className="mt-14">
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.type}`}
            contentStyle={item.style}
            contentArrowStyle={{ borderRight: `7px solid ${item.arrowColor}` }} 
            iconStyle={item.style}
            icon={item.icon}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Star />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
