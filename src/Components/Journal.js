import JournalCSS from "./Journal.module.css";
import cn from "classnames";

const Journal = (props) => {
  return (
    <main className={JournalCSS.img}>
      {/* first flex item */}

      <div className={JournalCSS["flex__item--first"]}>
        <img
          src={props.img}
          alt={props.alt}
          className={cn(JournalCSS["img__size--width"])}
        />
      </div>

      {/* first flex item*/}

      <div className={JournalCSS["flex__item--second"]}>
        {/* second */}

        <div className={JournalCSS.content__flex}>
          <img
            src="/images/location.png"
            alt="map"
            className={JournalCSS.content__location}
          />
          <p className={JournalCSS.content__country}>{props.location}</p>
          <a
            href="https://www.google.com/maps"
            className={JournalCSS.content__link}
          >
            View on Google Maps
          </a>
        </div>

        <div className={JournalCSS.content__font}>
          <p className={JournalCSS.content__title}>{props.place}</p>
          <p>
            <strong>
              {props.startDate}- {props.endDate}
            </strong>
          </p>
          <p className={JournalCSS.content__para}>{props.desc}</p>
        </div>
      </div>
    </main>
  );
};

export default Journal;
