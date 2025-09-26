import { redirect } from "next/navigation";
import InterviewStrategist from "@/components/InterviewStrategist";
import {getCurrentUser} from "@/lib/actions/auth.action";

const InterviewDetails =  async ({params } : RouteParams) => {
    const {id} = await params;

    const user = await getCurrentUser();

    if (!user?.name || !user?.id) {
        redirect("/login");
    }

    return (
        <InterviewStrategist
            userName={user?.name}
            userId={user?.id}
        />
    );
};

export default InterviewDetails;