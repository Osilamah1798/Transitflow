// Where Suliyat will work

import { pageImages } from "../assets";
import Tag from "./Tag";
import TeamMember from "./TeamMember";
import Reveal from "./Reveal";

const Team = () => {
  return (
    <div
      id="team"
      className="w-full bg-white 2xl:min-h-[800px] lg:min-h-dvh flex justify-center items-center p-16 md:p-10 lg:p-0"
    >
      <Reveal
        styles={
          "w-full max-w-4xl mx-auto flex flex-col gap-8 justify-center items-center"
        }
      >
        <Tag text={"The Transporters"} state={"secondary"} />

        <h3 className="text-tag-secondary-text text-xl md:text-3xl font-bold">
          Meet Expert Team
        </h3>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <TeamMember
            name={"Jessica Arrow"}
            image={pageImages.jessicaImg}
            member={"one"}
          />
          <TeamMember
            name={"Kathleen Smith"}
            image={pageImages.kathleenImg}
            member={"two"}
          />
          <TeamMember
            name={"Rebecca Tylor"}
            image={pageImages.rebeccaImg}
            member={"three"}
          />
        </div>
      </Reveal>
    </div>
  );
};

export default Team;
