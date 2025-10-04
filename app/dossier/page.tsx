import InterviewStrategist from "@/components/InterviewStrategist";
import {getCurrentUser} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";

const page = async () => {
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

export default page;