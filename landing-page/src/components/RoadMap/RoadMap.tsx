import { CSSProperties } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styles from "./RoadMap.module.scss";

const Icon = ({ quarter, year }: { quarter: string; year: Date | number }) => {
  return (
    <small style={{ textTransform: "capitalize" }}>
      {quarter} Quarter {year}
    </small>
  );
};

const RoadMap = () => {
  const yearNow = new Date().getFullYear();
  const iconStyle = {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "13px",
  };

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        date="January - March"
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={
          {
            background: "rgb(33, 150, 243)",
            color: "#fff",
            ...iconStyle,
          } as CSSProperties
        }
        icon={<Icon quarter="1st" year={yearNow} />}
      >
        <h3 className="vertical-timeline-element-title">Beta Testing</h3>
        <br />
        <h5 className="vertical-timeline-element-title">(Mid 1st Quarter)</h5>
        <div>
          <h3 className="vertical-timeline-element-title">CCA Token Launch</h3>
          <h3 className="vertical-timeline-element-title">Presale</h3>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="April - June"
        className={["vertical-timeline-element--work", styles.comingSoon].join(
          " "
        )}
        contentStyle={{ background: "#21679f", color: "#ddd" }}
        iconStyle={
          {
            background: "#21679f",
            color: "#ddd",
            ...iconStyle,
          } as CSSProperties
        }
        icon={<Icon quarter="2nd" year={yearNow} />}
      >
        <h3 className="vertical-timeline-element-title">Liquidity Pool</h3>
        <h3 className="vertical-timeline-element-title">Yield Farming </h3>
        <h3 className="vertical-timeline-element-title">Staking</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="July - September"
        className={["vertical-timeline-element--work", styles.comingSoon].join(
          " "
        )}
        contentStyle={{ background: "#21679f", color: "#ddd" }}
        iconStyle={
          {
            background: "#21679f",
            color: "#ddd",
            ...iconStyle,
          } as CSSProperties
        }
        icon={<Icon quarter="3rd" year={yearNow} />}
      >
        <h3 className="vertical-timeline-element-title">New Game Titles</h3>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className={["vertical-timeline-element--work", styles.comingSoon].join(
          " "
        )}
        contentStyle={{ background: "#21679f", color: "#ddd" }}
        iconStyle={
          {
            background: "#21679f",
            color: "#ddd",
            ...iconStyle,
          } as CSSProperties
        }
        icon={<Icon quarter="4th" year={yearNow} />}
      >
        <h3 className="vertical-timeline-element-title">Coming soon...</h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default RoadMap;
