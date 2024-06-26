import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type CustomCardProps = {
    imageSrc: string;
    date: string;
    title: string;
    description: string;
}

export const CustomCard = ({ imageSrc, date, title, description}: CustomCardProps) => {
    return (
        <Card className={`border-0 rounded bg-[#FBF6FF] overflow-hidden max-sm:w-[100%] shadow-none	`}>
            <div className="bg-gradient-to-r from-fuchsia-300 via-violet-400 to-indigo-400">

            <img src={imageSrc} alt={title} className="w-full rounded-md mix-blend-overlay" />
            </div>
            <CardContent className="px-0 py-2">
                <CardHeader className="p-0">
                    <CardDescription className="text-purple-600 text-xs mb-1">{date}</CardDescription>
                    <CardTitle className={`font-bold text-[#290742] text-2xl mb-1`}>{title}</CardTitle>
                </CardHeader>
                <p className="text-gray-700 text-md">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};
