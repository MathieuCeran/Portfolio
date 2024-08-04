import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Mathieu CERAN",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+33 07 67 69 50 83",
  },
  {
    icon: <MailIcon size={20} />,
    text: "ceran.mete@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "04-09-1992",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Developer Full-Stack",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bourg en Bresse, France",
  },
];

const qualificationsData = [
  {
    title: "Education",
    data: [
      {
        university: "University of Bourg en Bresse",
        qualification: "Master on Computer",
        year: "2012-2016",
      },
      {
        university: "University of Bourg en Bresse",
        qualification: "Master on Computer",
        year: "2012-2016",
      },
      {
        university: "University of Bourg en Bresse",
        qualification: "Master on Computer",
        year: "2012-2016",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Exhibition Hub",
        role: "Software Engineer",
        year: "2024",
      },
      {
        company: "Solopreneur",
        role: "Master on Computer",
        year: "2012-2024",
      },
      {
        company: "LOCAL.FR",
        role: "Responsable Technique & évolution produit",
        year: "2023-2024",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Front-end Development",
      },
      {
        name: "Javascript, React",
      },
      {
        name: "Back-end Development",
      },
      {
        name: "Git, Github",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px]" value="personal">
                  Personal info
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="qualifications">
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px]" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate, nam.
                    </h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur accusantium nesciunt libero quod tempora qui
                      explicabo dolorum cumque pariatur ratione!
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <p>{item.text}</p>
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, French</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "Experience").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "Experience").data.map(
                            (item, index) => {
                              const { company, role, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[95px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationsData, "Education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "Education").data.map(
                            (item, index) => {
                              const { university, qualification, year } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[95px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex flex-col">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I use everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(skillsData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="font-medium">
                                  <span className="text-primary mr-5">-</span>
                                  {name}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillsData, "tools").data.map(
                          (item, index) => {
                            const { imgPath } = item;
                            return (
                              <div
                                key={index}
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                              >
                                <div className="flex items-center justify-center">
                                  <Image
                                    src={imgPath}
                                    alt="tools"
                                    width={48}
                                    height={48}
                                    priority
                                  />
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
