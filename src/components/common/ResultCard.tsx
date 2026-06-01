import { Card, CardContent } from "../ui/Card";
import { Progress } from "../ui/Progress";
import { TypographyP } from "../ui/Typography";

interface ResultCardProps {
    label: string;
    value: string;
    progress: number
}

export default function ResultCard({ label, value, progress }: ResultCardProps) {
    return (
        <Card className="w-full max-w-xl">
            <CardContent className="p-6 space-y-3">
                 <div className="space-y-1">
                    <TypographyP className="text-[16px] !mt-0">
                        {label}
                    </TypographyP>

                    <TypographyP className="text-[22px] font-bold !mt-0">
                        {value}
                    </TypographyP>
                </div>

                <Progress value={progress} />
            </CardContent>
        </Card>
    )
}