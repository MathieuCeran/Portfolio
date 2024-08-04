import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const servicesData = [
  {
    title: "Web Development",
    description: "We build web applications using modern technologies.",
    icon: <Blocks size={72} strokeWidth={0.8} />,
  },
  {
    title: "Mobile Development",
    description: "We build mobile applications for iOS and Android.",
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
  },
  {
    title: "Design",
    description: "We design beautiful and user-friendly interfaces.",
    icon: <Gem size={72} strokeWidth={0.8} />,
  },
];

const Services = () => {
  return (
    <section classNamez="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((service, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
